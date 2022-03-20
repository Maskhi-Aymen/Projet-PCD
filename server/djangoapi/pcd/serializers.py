from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from pcd.models import Admin,User,Publication,Notes,Song,PlayList,Favorite,Meditate,Plan,Activity,Message,Report,Statistics

class AdminSerializer(serializers.ModelSerializer):
     class Meta:
         model=Admin
         fields=('admin_mail','admin_password')

class UserSerializer(serializers.ModelSerializer):
     class Meta:
         model=User
         fields=('user_id','user_mail','user_password','user_name','user_Lastname','user_date_birth','user_dateOfJoin','user_avatar','user_type','user_objectifs','admin')

class PublicationSerializer(serializers.ModelSerializer):
     class Meta:
         model=Publication
         fields=('pub_id','pub_type','pub_date','pub_title','pub_description','pub_url','pub_author','suggestion','pub_reactions')

class NoteSerializer(serializers.ModelSerializer):
     class Meta:
         model=Notes
         fields=('note_id','note_content','note_date','user')

class SongSerializer(serializers.ModelSerializer):
     class Meta:
         model=Song
         fields=('song_id','song_singer','song_url','song_type')


class PlayListSerializer(serializers.ModelSerializer):
     class Meta:
         model=PlayList
         fields=('pl_id','pl_name','pl_imgurl','songs')


class FavoriteSerializer(serializers.ModelSerializer):
     class Meta:
         model=Favorite
         fields=('author','pub','date')

class MeditateSerializer(serializers.ModelSerializer):
     class Meta:
         model=Meditate
         fields=('med_id','med_name','med_description','med_imgurl','med_songurl')

class PlanSerializer(serializers.ModelSerializer):
     class Meta:
         model=Plan
         fields=('plan_id','plan_name','plan_type','plan_activity')

class ActivitySerializer(serializers.ModelSerializer):
     class Meta:
         model=Activity
         fields=('activity_id','activity_name','activity_type','activity_date','activity_time','activity_duration')

class MessageSerializer(serializers.ModelSerializer):
     class Meta:
         model=Message
         fields=('message_id','message_user','message_content')

class ReportSerializer(serializers.ModelSerializer):
     class Meta:
         model=Report
         fields=('report_id','report_author','report_pub','report_message')

class StatisticSerializer(serializers.ModelSerializer):
     class Meta:
         model=Statistics
         fields=('st_id','st_date','st_nb_user','st_nb_pub','st_nb_sugg',)