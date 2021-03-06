from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from django.conf import settings
from django.dispatch import receiver

# Create your models here.

class UserDocs(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE)
    RG = models.CharField(max_length=20, blank=True)
    date_of_birth = models.DateField(blank=True)
    CPF = models.CharField(max_length=20, blank=True)
    phone = models.CharField(max_length=20)

class UserAddress(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE)
    street = models.CharField(max_length=200)
    quarter = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=20)
    city = models.CharField(max_length=200)
    state =  models.CharField(max_length=200)

class UserFinanceInfo(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE)
    bank = models.CharField(max_length=50)
    agency =  models.CharField(max_length=50)
    account = models.CharField(max_length=50)
    balance = models.FloatField(blank=True, null=True)
    pix_key =  models.CharField(max_length=255)
   