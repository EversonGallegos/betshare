from django.db import models
from django.db.models.deletion import DO_NOTHING
from django.db.models.fields import CharField
from lottery.models import QuoteManager, Contest
# Create your models here.

class Ticket(models.Model):
    quotes = models.OneToOneField(QuoteManager, on_delete=DO_NOTHING)
    contest = models.OneToOneField(Contest, on_delete=DO_NOTHING)
    status = models.CharField(max_length=50)
    
class Bet(models.Model):
    ticket = models.OneToOneField(Ticket, on_delete=DO_NOTHING)
    numbers = models.CharField(max_length=250)
    proof = models.ImageField()
    status = models.CharField(max_length=50)

class Prize(models.Model):
    bet = models.ForeignKey(Bet, on_delete=DO_NOTHING)
    total_prize = models.FloatField()
    winning_numbers = models.IntegerField()