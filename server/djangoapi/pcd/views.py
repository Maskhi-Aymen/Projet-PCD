from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from pcd.models import Admin,User
from bson import ObjectId
from django.http import HttpResponse
from pcd.serializers import AdminSerializer,UserSerializer

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
    admin=Admin.objects.get(admin_mail=id)
    admin_data=JSONParser().parse(request)
    if(admin.admin_mail== admin_data['admin_mail'] and  admin.admin_password==admin_data['admin_password']):
         return JsonResponse({'error':'true'})
    else:
         return JsonResponse({'error':'false'})