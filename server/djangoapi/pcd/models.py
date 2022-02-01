from pickle import TRUE
from pyexpat import model
from statistics import mode
from typing_extensions import Required
from django.db import models

# Create your models here.

class Admin(models.Model):
    admin_mail = models.CharField(max_length=500,unique=True)
    admin_password = models.CharField(max_length=500)

class User(models.Model):
    user_mail = models.CharField(max_length=500,unique=True)
    user_password = models.CharField(max_length=500)
    