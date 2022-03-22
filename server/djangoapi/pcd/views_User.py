import os
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from pcd.models import Admin,User,Publication,Favorite,Song,Notes,PlayList,Report,Meditate,Plan,Activity,Message,Statistics
from bson import ObjectId
from django.http import HttpResponse
from pcd.serializers import UserSerializer,PublicationSerializer,NoteSerializer,SongSerializer,PlayListSerializer,FavoriteSerializer,MessageSerializer,ActivitySerializer
from django.core.files.storage import default_storage


@csrf_exempt
def NotesApi(request,id=0):
    if request.method=='GET':
        note = Notes.objects.filter(User__user=id)
        note_serializer=NoteSerializer(note,many=True)
        return JsonResponse(note_serializer.data,safe=False)
    elif request.method=='POST':
        note_data=JSONParser().parse(request)
        note_serializer=NoteSerializer(data=note_data)
        if note_serializer.is_valid():
            note_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        note_data=JSONParser().parse(request)
        note=Notes.objects.get(note_id = note_data['note_id'] )
        note_serializer=NoteSerializer(note,data=note_data)
        if note_serializer.is_valid():
            note_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        note=Notes.objects.get(note_id = id)
        note.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def FavoriteApi(request,id=0):
    if request.method=='GET': 
        fav = Publication.objects.filter(favorite__author=id)
        fav_serializer=PublicationSerializer(fav,many=True)
        return JsonResponse(fav_serializer.data,safe=False)
    elif request.method=='POST':
        try:
            f_data=JSONParser().parse(request)
            fav=Favorite.objects.get(pub=f_data['pub'] ,author=f_data['author'] )
            return JsonResponse("exist!",safe=False)
        except Favorite.DoesNotExist:
            fav_data=JSONParser().parse(request)
            fav_serializer=FavoriteSerializer(data=fav_data)
            if fav_serializer.is_valid():
               fav_serializer.save()
               return JsonResponse("added succefully",safe=False)
            return JsonResponse("Failed to add",safe=False)
    elif request.method=='DELETE':
        f_data=JSONParser().parse(request)
        fav=Favorite.objects.get(pub=f_data['pub'] ,author=f_data['author'] )
        fav.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def Publication_ReactionApi(request,id=0):
    if request.method=='GET':
        pub=Publication.objects.get(pub_id = id)
        pub_serializer=PublicationSerializer(pub)
        nombre=len(pub_serializer.data.get('pub_reactions'))
        return JsonResponse({'reaction':nombre},safe=False)
    elif request.method=='POST':
        pub_data=JSONParser().parse(request)
        pub=Publication.objects.get(pub_id=pub_data['pub_id'])
        pub_serializer=PublicationSerializer(pub,partial=True)
        reaction=pub_serializer.data.get('pub_reactions')
        reaction.append(id)
        pub_serializer.data.update({'pub_reactions':reaction})
        p=PublicationSerializer(pub,data=pub_serializer.data)
        if p.is_valid():
            p.save()
            return JsonResponse(p.data)
        return JsonResponse(p.errors)
    elif request.method=='DELETE':
        pub_data=JSONParser().parse(request)
        pub=Publication.objects.get(pub_id=pub_data['pub_id'])
        pub_serializer=PublicationSerializer(pub,partial=True)
        reaction=pub_serializer.data.get('pub_reactions')
        reaction.remove(int(id))
        pub_serializer.data.update({'pub_reactions':reaction})
        p=PublicationSerializer(pub,data=pub_serializer.data)
        if p.is_valid():
            p.save()
            return JsonResponse(p.data)
        return JsonResponse(p.errors)
@csrf_exempt
def UserActivityApi(request,id=0):
    if request.method=='GET':
        A_data=JSONParser().parse(request)
        activity=Activity.objects.get(plan_name = A_data['user_type'] )
        A_serializer=ActivitySerializer(activity,many=True)
        return JsonResponse(A_serializer.data,safe=False)

@csrf_exempt
def SaveFileApi(request,id=0): 
    file = request.FILES['image'] 
    file_name=default_storage.save(file.name,file) 
    return JsonResponse(file_name,safe=False)


