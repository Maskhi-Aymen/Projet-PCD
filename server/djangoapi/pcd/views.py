from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from pcd.models import Admin,User,Publication,Favorite,Song,Notes,PlayList,Report,Meditate,Plan,Activity,Message,Statistics
from bson import ObjectId
from django.http import HttpResponse
from pcd.serializers import AdminSerializer,UserSerializer,PublicationSerializer,NoteSerializer,SongSerializer,PlayListSerializer,FavoriteSerializer

# Create your views here.


@csrf_exempt
def AdminApi(request,id=0):
    if request.method=='GET':
        admin = Admin.objects.all()
        admin_serializer=AdminSerializer(admin,many=True)
        return JsonResponse(admin_serializer.data,safe=False)
    elif request.method=='POST':
        admin_data=JSONParser().parse(request)
        admin_serializer=AdminSerializer(data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        admin_data=JSONParser().parse(request)
        admin=Admin.objects.get(admin_mail=admin_data['admin_mail'])
        admin_serializer=AdminSerializer(admin,data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        admin=Admin.objects.get(admin_mail=id)
        admin.delete()
        return JsonResponse("Deleted Successfully",safe=False)

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



@csrf_exempt
def UserApi(request,id=0):
    if request.method=='GET':
        user = User.objects.all()
        user_serializer=UserSerializer(user,many=True)
        return JsonResponse(user_serializer.data,safe=False)
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        user_serializer=UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user=User.objects.get(user_id = user_data['user_id'] )
        user_serializer=UserSerializer(user,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        user=User.objects.get(user_id = id)
        user.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def PublicationApi(request,id=0):
    if request.method=='GET':
        pub = Publication.objects.all()
        pub_serializer=PublicationSerializer(pub,many=True)
        return JsonResponse(pub_serializer.data,safe=False)
    elif request.method=='POST':
        pub_data=JSONParser().parse(request)
        pub_serializer=PublicationSerializer(data=pub_data)
        if pub_serializer.is_valid():
            pub_serializer.save()
            return JsonResponse("added succefully",safe=False)
        print(pub_serializer.errors)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        pub_data=JSONParser().parse(request)
        pub=Publication.objects.get(pub_mail=pub_data['pub_mail'])
        pub_serializer=PublicationSerializer(pub,data=pub_data)
        if pub_serializer.is_valid():
            pub_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        pub=Publication.objects.get(pub_mail=id)
        pub.delete()
        return JsonResponse("Deleted Successfully",safe=False)



@csrf_exempt
def PlaylistApi(request,id=0):
    if request.method=='GET':
        pl = PlayList.objects.all()
        pl_serializer=PlayListSerializer(pl,many=True)
        return JsonResponse(pl_serializer.data,safe=False)
    elif request.method=='POST':
        pl_data=JSONParser().parse(request)
        pl_serializer=PlayListSerializer(data=pl_data)
        if pl_serializer.is_valid():
            pl_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        pl_data=JSONParser().parse(request)
        pl=PlayList.objects.get(pl_id=pl_data['pl_id'])
        pl_serializer=PlayListSerializer(pl,data=pl_data)
        if pl_serializer.is_valid():
            pl_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        pl=PlayList.objects.get(pl_id = id)
        pl.delete()
        return JsonResponse("Deleted Successfully",safe=False)