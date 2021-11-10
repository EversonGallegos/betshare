from django.db import models
from django.db.models.deletion import CASCADE, DO_NOTHING
from django.db.models.fields.related import ForeignKey, ManyToManyField
from django.core.validators import MaxValueValidator, MinValueValidator
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
    OPEN = 'open'
    CLOSED = 'closed'
    FINISHED = 'finished'

class Contest(models.Model):
    game = models.ForeignKey(Game, on_delete=DO_NOTHING)
    code = models.IntegerField()
    status = models.CharField(max_length=50, choices=ContestStatus.choices, default=ContestStatus.OPEN)
    prize = models.FloatField()
    numbers_drawn = models.CharField(max_length=250, null=True, blank=True)

    def __str__(self):
        return self.game.name + " " + str(self.code)

class TicketStatus(models.Choices):
    OPEN = 'open'
    CLOSED = 'closed'
    FINISHED = 'finished'

class Ticket(models.Model):
    code = models.IntegerField(unique=True)
    contest = models.ForeignKey(Contest, on_delete=CASCADE)
    status = models.CharField(max_length=50, default=TicketStatus.OPEN)
    
    def __str__(self):
        return self.contest.game.name + "(" + str(self.code) + ")"

class QuoteManager(models.Model):
    option = ForeignKey(Option, on_delete=CASCADE)
    requests = ManyToManyField(Request, related_name="request_quotes")
    ticket = models.OneToOneField(Ticket, on_delete=CASCADE)
    open = models.BooleanField(default=True)
    quotes_sold = models.IntegerField(
        validators=[
            MaxValueValidator(MAX_QUOTES),
            MinValueValidator(0)
        ])
    price_quote = models.FloatField(null=True, blank=True)

class Bet(models.Model):
    ticket = models.OneToOneField(Ticket, on_delete=DO_NOTHING)
    numbers = models.CharField(max_length=250)
    proof = models.ImageField()
    win_prize = models.FloatField(null=True, blank=True)
    status = models.CharField(max_length=50)

class Prize(models.Model):
    request = models.OneToOneField(Request, on_delete=DO_NOTHING)
    bet = models.ForeignKey(Bet, on_delete=CASCADE)
    prize = models.FloatField()

def post_save_config(sender, **kwargs):
    instance = kwargs['instance']
    quote_manager=None
    code_ticket = 0
    contest=None
    code_contest = 0
    try:
        quote_manager =  QuoteManager.objects.filter(open=True).get(option=instance.option)
    except QuoteManager.DoesNotExist: 
        if(len(Ticket.objects.all()) > 0):
            code_ticket = Ticket.objects.all().last().code
        try:
            contest = Contest.objects.filter(
                                        status=ContestStatus.OPEN
                                    ).get(
                                        game=instance.optiongame)
        except:  
            if(len(Contest.objects.all()) > 0):
                code_contest = Contest.objects.all().last().code
            contest = Contest(
                            code=code_contest+1,
                            game=instance.option.game,
                            prize=20000000)
            contest.save()
        ticket = Ticket(code=code_ticket+1,
                    contest=contest)
        ticket.save()
        quote_manager = QuoteManager(
                                    option=instance.option,
                                    ticket=ticket,
                                    quotes_sold=instance.quotes)
        quote_manager.save()
        quote_manager.requests.add(instance)
        return quote_manager
    if((MAX_QUOTES - quote_manager.quotes_sold) >= instance.quotes):
        quote_manager.quotes_sold += instance.quotes
        
        if(quote_manager.quotes_sold == MAX_QUOTES):
            quote_manager.open = False
        quote_manager.save()
        quote_manager.requests.add(instance)
    else:
        rest_quotes = instance.quotes - (MAX_QUOTES - quote_manager.quotes_sold)
        sold_quotes = instance.quotes - rest_quotes
        quote_manager.quotes_sold = MAX_QUOTES
        instance.quotes = sold_quotes
        instance.save()
        quote_manager.open = False 
        quote_manager.save()
        quote_manager.requests.add(instance) 
        new_request = Request(
                        user=instance.user,
                        option=instance.option,
                        quotes=rest_quotes)
        new_request.save()
    return quote_manager

post_save.connect(post_save_config, sender=Request)