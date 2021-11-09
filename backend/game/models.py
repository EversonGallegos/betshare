from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields.related import ForeignKey

# Create your models here.
class Game(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=50)

class Option(models.Model):
    game = ForeignKey(Game, on_delete=CASCADE)
    numbers = models.IntegerField()
    price = models.FloatField()
    chance = models.FloatField()