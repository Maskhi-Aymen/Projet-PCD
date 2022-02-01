from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from pcd.models import Admin,User

class AdminSerializer(serializers.ModelSerializer):
     class Meta:
         model=Admin
         fields=('admin_mail','admin_password')

class UserSerializer(serializers.ModelSerializer):
     class Meta:
         model=User
         fields=('user_mail','user_password')
