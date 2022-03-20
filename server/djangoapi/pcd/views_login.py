from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from pcd.models import Admin,User,Publication,Favorite,Song,Notes,PlayList,Report,Meditate,Plan,Activity,Message,Statistics
from bson import ObjectId
from django.http import HttpResponse
from pcd.serializers import AdminSerializer,UserSerializer,PublicationSerializer,NoteSerializer,SongSerializer,PlayListSerializer,FavoriteSerializer


@csrf_exempt
def login(request,id):
    user=User.objects.get(user_mail=id)
    user_data=JSONParser().parse(request)
    if(user.user_mail== user_data['user_mail'] and  user.user_password==user_data['user_password']):
        if(user.admin):
           return JsonResponse({'error':'true','admin':'true'})
        else:
            return JsonResponse({'error':'true','admin':'false'})
    else:
         return JsonResponse({'error':'false'})

