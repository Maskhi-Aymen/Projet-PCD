from asyncio.windows_events import NULL
from email.policy import default
from pickle import TRUE
from pyexpat import model
from statistics import mode
from typing_extensions import Required 
from django.db import models
from datetime import date

# Create your models here.

class Admin(models.Model):
    admin_mail = models.CharField(max_length=500,unique=True)
    admin_password = models.CharField(max_length=500)
    
class User(models.Model):
    user_id=models.BigAutoField(primary_key=True)
    user_mail = models.EmailField(max_length=254,unique=True)
    user_password = models.CharField(max_length=500)
    user_name = models.CharField(max_length=50)
    user_Lastname=models.CharField(max_length=50)
    user_date_birth=models.DateField()
    user_dateOfJoin=models.DateField(auto_now=True)
    user_avatar=models.ImageField(blank=True,default='')
    user_type=models.CharField(max_length=40)
    user_objectifs=models.CharField(max_length=500)
    admin=models.BooleanField(default=False) 

class Notes (models.Model):
    note_id=models.BigAutoField(primary_key=True)
    note_content=models.TextField(max_length=500)
    note_date=models.DateField(auto_now=True)
    user=models.ForeignKey(User,on_delete=models.CASCADE)

class Publication(models.Model):
    MEDIA_CHOICES = ["vedio", "image","text"]
    pub_id=models.BigAutoField(primary_key=True)
    pub_type=models.CharField(max_length=6,default="text")
    pub_date=models.DateField(auto_now=True)
    pub_title=models.CharField(max_length=100)
    pub_description=models.TextField(max_length=500)
    pub_url=models.URLField(max_length=500)
    pub_author=models.ForeignKey(User,on_delete=models.CASCADE,related_name='pub_author')
    pub_reactions=models.ManyToManyField(User,related_name='pub_reactions',default=[],blank=True)
    suggestion=models.BooleanField(default=True)

class Meditate(models.Model):
    med_id=models.SmallAutoField(primary_key=True)
    med_name=models.CharField(max_length=50,unique=True)
    med_description=models.CharField(max_length=50,unique=True)
    med_imgurl=models.URLField()
    med_songurl=models.URLField()

class Song(models.Model):
    CHOICES = ["playliste","sleep"]
    song_id=models.BigAutoField(primary_key=True)
    song_url=models.URLField()
    song_singer=models.CharField(max_length=50)
    song_type=models.CharField(max_length=1,default="sleep")

class PlayList(models.Model):
    pl_id=models.AutoField(primary_key=True)
    pl_name=models.CharField(max_length=50,unique=True)
    pl_imgurl=models.URLField()
    songs=models.ManyToManyField(Song,related_name='playliste_song',default=[],blank=True)

class Favorite(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    pub = models.ForeignKey(Publication, on_delete=models.CASCADE)
    date = models.DateField(auto_now=True)

class Activity(models.Model):
    activity_id  = models.BigAutoField(primary_key=True)
    activity_name = models.CharField(max_length=100,unique=True)
    activity_type = models.CharField(max_length=100,unique=True)
    activity_date = models.DateField()
    activity_time = models.DateTimeField()
    activity_duration = models.DurationField()

class Plan(models.Model):
    plan_id=models.BigAutoField(primary_key=True)
    plan_name =models.CharField(max_length=100,unique=True)
    plan_type =models.CharField(max_length=500,unique=True)
    plan_activity=models.ManyToManyField(Activity,related_name='plan_activity',default=[])

class Message(models.Model):
    message_id = models.BigAutoField(primary_key=True)
    message_user = models.ForeignKey(User,on_delete=models.CASCADE)
    message_content = models.TextField(max_length=500,unique=True)

class Report(models.Model):
    report_id = models.BigAutoField(primary_key=True)
    report_pub = models.ForeignKey(Publication,on_delete=models.CASCADE)
    report_author = models.ForeignKey(User,on_delete=models.CASCADE)
    report_message = models.TextField(max_length=500,unique=True)

class Statistics(models.Model):
    st_id = models.BigAutoField(primary_key=True)
    st_date = models.DateField()
    st_nb_user= models.IntegerField()
    st_nb_pub= models.IntegerField()
    st_nb_sugg= models.IntegerField()


