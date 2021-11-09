from django.db import models
from django.db.models.deletion import DO_NOTHING
from django.db.models.fields.related import ForeignKey, ManyToManyField
from django.core.validators import MaxValueValidator, MinValueValidator
from game.models import Option, Game
from django.contrib.auth.models import User
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

class QuoteManager(models.Model):
    option = ForeignKey(Option, on_delete=DO_NOTHING)
    requests = ManyToManyField(Request, related_name="request_quotes")
    max_quotes = models.IntegerField(default=250, blank=True)
    quotes_sold = models.IntegerField(
        validators=[
            MaxValueValidator(max_quotes),
            MinValueValidator(0)
        ])
    price_quote = models.FloatField()

class Contest(models.Model):
    game = models.ForeignKey(Game, on_delete=DO_NOTHING)
    code = models.IntegerField()
    status = models.CharField(max_length=50)
    prize = models.FloatField()
    numbers_drawn = models.CharField(max_length=250)