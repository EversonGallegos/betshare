from django.db import models
from django.db.models.deletion import CASCADE, DO_NOTHING
from django.db.models.fields.related import ForeignKey, ManyToManyField
from django.core.validators import MaxValueValidator, MinValueValidator
from django.http import request
from game.models import Option, Game
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from .config.constants import MAX_QUOTES
# Create your models here.

class RequestStatus(models.Choices):
    OPEN = "open"
    PAID = "paid"
    CANCELED = "canceled"
    FINISHED = 'finished'

class Request(models.Model):
    user = models.ForeignKey(User, on_delete=DO_NOTHING)
    option = models.ForeignKey(Option, on_delete=DO_NOTHING)
    quotes = models.IntegerField()
    price =  models.FloatField()
    status = models.CharField(max_length=50, choices=RequestStatus.choices)

    def __str__(self):
        return self.user.username + "(" + str(self.quotes) + ")"

    def save(self, *args):
        self.price = round(((self.option.price / MAX_QUOTES) * self.quotes),2) 
        super(Request, self).save(*args)

class ContestStatus(models.Choices):
    PENDING = 'pending'
    FINISHED = 'finished'

class Contest(models.Model):
    code = models.IntegerField()
    game = models.ForeignKey(Game, on_delete=DO_NOTHING)
    status = models.CharField(max_length=50, choices=ContestStatus.choices, default=ContestStatus.PENDING)
    prize = models.FloatField(default=1)

    def __str__(self):
        return self.game.name + " " + str(self.code)

class TicketStatus(models.Choices):
    OPEN = 'open'
    CLOSED = 'closed'
    FINISHED = 'finished'

class Ticket(models.Model):
    option = ForeignKey(Option, on_delete=CASCADE)
    status = models.CharField(max_length=50, default=TicketStatus.OPEN)
    requests = models.ManyToManyField(Request, through='QuoteManager')
    quotes_sold = models.IntegerField(
        validators=[
            MaxValueValidator(MAX_QUOTES),
            MinValueValidator(0)
        ])
    def __str__(self):
        return self.option.game.name + "(" + str(self.id) + ")"

class QuoteManager(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=CASCADE)
    request = models.ForeignKey(Request, on_delete=CASCADE)
    transaction = models.CharField(max_length=250)
    quotes = models.IntegerField() 

class BetStatus(models.Choices):
    PENDING = 'pending'
    NO_PRIZE = 'no_prize'
    WITH_PRIZE = 'with_prize'

class Bet(models.Model):
    ticket = models.OneToOneField(Ticket, on_delete=DO_NOTHING)
    contest = ForeignKey(Contest, on_delete=CASCADE)
    numbers = models.CharField(max_length=250)
    create_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=BetStatus.choices, default=BetStatus.PENDING)

class Draw(models.Model):
    contest = models.OneToOneField(Contest, on_delete=DO_NOTHING)
    numbers_drawn = models.CharField(max_length=250, null=True, blank=True)
    date = models.DateField()

class Prize(models.Model):
    draw = models.ForeignKey(Draw, on_delete=CASCADE)
    numbers = models.PositiveIntegerField()
    value = models.FloatField()
    winners = models.IntegerField()

class UserPrize(models.Model):
    user = models.ForeignKey(User, on_delete=CASCADE)
    request = models.ForeignKey(Request, on_delete=CASCADE)
    value = models.FloatField()
    proof = models.ImageField()

def post_save_config(sender, **kwargs):
    instance = kwargs['instance']
    quote_manager=None
    code_ticket = 0
    contest=None
    code_contest = 0
    if(len(Ticket.objects.all()) > 0):
        code_ticket = Ticket.objects.all().last().code
    try:
        contest = Contest.objects.filter(
                                    status=ContestStatus.OPEN
                                ).get(
                                    game=instance.option.game)
    except:  
        if(len(Contest.objects.all()) > 0):
            code_contest = Contest.objects.all().last().code
        contest = Contest(
                        code=code_contest+1,
                        game=instance.option.game)
        contest.save()
    ticket = Ticket(
                code=code_ticket+1,
                contest=contest,
                quotes_sold=instance.quotes)
    ticket.save()
    quote_manager = QuoteManager(
                                option=instance.option,
                                request = instance,
                                ticket=ticket)
    quote_manager.save()
    if((MAX_QUOTES - quote_manager.quotes_sold) >= instance.quotes):
        quote_manager.quotes_sold += instance.quotes
        quote_manager.save()
    else:
        rest_quotes = instance.quotes - (MAX_QUOTES - quote_manager.quotes_sold)
        sold_quotes = instance.quotes - rest_quotes
        quote_manager.quotes_sold = MAX_QUOTES
        instance.quotes = sold_quotes
        instance.save()
        quote_manager.open = False 
        quote_manager.save()
        new_request = Request(
                        user=instance.user,
                        option=instance.option,
                        quotes=rest_quotes)
        new_request.save()
    return quote_manager

post_save.connect(post_save_config, sender=Request)