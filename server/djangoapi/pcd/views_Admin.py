from pickle import FALSE
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from pcd.models import User,Publication,Song,PlayList,Report,Meditate,Plan,Activity,Message,Statistics
from bson import ObjectId
from django.http import HttpResponse
from pcd.serializers import UserSerializer,PublicationSerializer,SongSerializer,PlayListSerializer,ActivitySerializer,StatisticSerializer,MeditateSerializer,MessageSerializer,PlanSerializer,ReportSerializer
from datetime import datetime , date

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
    elif request.method=='PATCH':
        user=User.objects.get(user_id = id)
        user_serializer=UserSerializer(user)
        return JsonResponse(user_serializer.data,safe=False)
        
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
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        pub_data=JSONParser().parse(request)
        pub=Publication.objects.get(pub_id=pub_data['pub_id'])
        pub_serializer=PublicationSerializer(pub,data=pub_data)
        if pub_serializer.is_valid():
            pub_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        pub=Publication.objects.get(pub_mail=id)
        pub.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    elif request.method=='PATCH':
        pub=Publication.objects.get(pub_id = id)
        pub_serializer=PublicationSerializer(pub)
        return JsonResponse(pub_serializer.data,safe=False)

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
    elif request.method=='PATCH':
        pl=PlayList.objects.get(pl_id = id)
        pl_serializer=PlayListSerializer(pl)
        return JsonResponse(pl_serializer.data,safe=False)

@csrf_exempt
def SongApi(request,id=0):
    if request.method=='GET':
        song = Song.objects.all()
        song_serializer=SongSerializer(song,many=True)
        return JsonResponse(song_serializer.data,safe=False)
    elif request.method=='POST':
        song_data=JSONParser().parse(request)
        song_serializer=SongSerializer(data=song_data)
        if song_serializer.is_valid():
            song_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        song_data=JSONParser().parse(request)
        song=Song.objects.get(song_id=song_data['song_id'])
        song_serializer=SongSerializer(song,data=song_data)
        if song_serializer.is_valid():
            song_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        song=Song.objects.get(song_id = id)
        song.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    elif request.method=='PATCH':
        song=Song.objects.get(song_id = id)
        song_serializer=SongSerializer(song)
        return JsonResponse(song_serializer.data,safe=False)
    elif request.method=='HEAD':
        song=Song.objects.get(song_type = "sleep")
        song_serializer=SongSerializer(song,many=True)
        return JsonResponse(song_serializer.data,safe=False)

@csrf_exempt
def MessageApi(request,id=0):
    if request.method=='GET':
        message = Message.objects.all()
        message_serializer=MessageSerializer(message,many=True)
        return JsonResponse(message_serializer.data,safe=False)
    elif request.method=='POST':
        message_data=JSONParser().parse(request)
        message_serializer=MessageSerializer(data=message_data)
        if message_serializer.is_valid():
            message_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='DELETE':
        message=Message.objects.get(message_id = id)
        message.delete()
        return JsonResponse("Deleted Successfully",safe=False)
@csrf_exempt
def ReportApi(request,id=0):
    if request.method=='GET':
        report = Report.objects.all()
        report_serializer=ReportSerializer(report,many=True)
        return JsonResponse(report_serializer.data,safe=False)
    elif request.method=='POST':
        report_data=JSONParser().parse(request)
        report_serializer=ReportSerializer(data=report_data)
        if report_serializer.is_valid():
            report_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='DELETE':
        report=Report.objects.get(Report_id = id)
        report.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def ActivityApi(request,id=0):
    if request.method=='GET':
        activity = Activity.objects.all()
        activity_serializer=ActivitySerializer(activity,many=True)
        return JsonResponse(activity_serializer.data,safe=False)
    elif request.method=='POST':
        activity_data=JSONParser().parse(request)
        activity_serializer=ActivitySerializer(data=activity_data)
        if activity_serializer.is_valid():
            activity_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        activity_data=JSONParser().parse(request)
        activity=Activity.objects.get(activity_id = activity_data['activity_id'] )
        activity_serializer=ActivitySerializer(activity,data=activity_data)
        if activity_serializer.is_valid():
            activity_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        activity=Activity.objects.get(activity_id = id)
        activity.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    elif request.method=='PATCH':
        activity=Activity.objects.get(activity_id = id)
        activity_serializer=ActivitySerializer(activity)
        return JsonResponse(activity_serializer.data,safe=False)
@csrf_exempt
def PlanApi(request,id=0):
    if request.method=='GET':
        plan = Plan.objects.all()
        plan_serializer=PlanSerializer(plan,many=True)
        return JsonResponse(plan_serializer.data,safe=False)
    elif request.method=='POST':
        plan_data=JSONParser().parse(request)
        plan_serializer=PlanSerializer(data=plan_data)
        if plan_serializer.is_valid():
            plan_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        plan_data=JSONParser().parse(request)
        plan=Plan.objects.get(plan_id = plan_data['plan_id'] )
        plan_serializer=PlanSerializer(plan,data=plan_data)
        if plan_serializer.is_valid():
            plan_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        plan=Plan.objects.get(plan_id = id)
        plan.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    elif request.method=='PATCH':
        plan=Plan.objects.get(plan_id = id)
        plan_serializer=PlanSerializer(plan)
        return JsonResponse(plan_serializer.data,safe=False)

@csrf_exempt
def MeditateApi(request,id=0):
    if request.method=='GET':
        meditate = Meditate.objects.all()
        meditate_serializer=MeditateSerializer(meditate,many=True)
        return JsonResponse(meditate_serializer.data,safe=False)
    elif request.method=='POST':
        meditate_data=JSONParser().parse(request)
        meditate_serializer=MeditateSerializer(data=meditate_data)
        if meditate_serializer.is_valid():
            meditate_serializer.save()
            return JsonResponse("added succefully",safe=False)
        return JsonResponse("Failed to add",safe=False)
    elif request.method=='PUT':
        meditate_data=JSONParser().parse(request)
        meditate=Meditate.objects.get(meditate_id = meditate_data['med_id'] )
        meditate_serializer=MeditateSerializer(meditate,data=meditate_data)
        if meditate_serializer.is_valid():
            meditate_serializer.save()
            return JsonResponse("Update Successfully",safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        meditate=Meditate.objects.get(med_id = id)
        meditate.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    elif request.method=='PATCH':
        meditate=Meditate.objects.get(med_id = id)
        meditate_serializer=MeditateSerializer(meditate)
        return JsonResponse(meditate_serializer.data,safe=False)

@csrf_exempt
def Playlist_SongApi(request,id=0):
    if request.method=='GET':
        songs=Song.objects.filter(songs=id)
        songs_serializer=ActivitySerializer(songs,many=True)
        return JsonResponse(songs_serializer.data,safe=False)
    elif request.method=='POST':
        pl_data=JSONParser().parse(request)
        pl=PlayList.objects.get(pl_id=pl_data['pl_id'])
        pl_serializer=PlayListSerializer(pl,partial=True)
        songs=pl_serializer.data.get('songs')
        songs.append(id)
        pl_serializer.data.update({'songs':songs})
        p=PlayListSerializer(pl,data=pl_serializer.data)
        if p.is_valid():
            p.save()
            return JsonResponse(p.data)
        return JsonResponse(p.errors)
    elif request.method=='DELETE':
        pl_data=JSONParser().parse(request)
        pl=PlayList.objects.get(pl_id=pl_data['pl_id'])
        pl_serializer=PlayListSerializer(pl,partial=True)
        songs=pl_serializer.data.get('songs')
        print(songs)
        songs.remove(int(id))
        print(songs)
        pl_serializer.data.update({'songs':songs})
        p=PublicationSerializer(pl,data=pl_serializer.data)
        if p.is_valid():
            p.save()
            return JsonResponse(p.data)
        return JsonResponse(p.errors)

@csrf_exempt
def Plan_ActivityApi(request,id=0):
    if request.method=='GET':
        plan=Activity.objects.filter(plan_activity=id)
        plan_serializer=ActivitySerializer(plan,many=True)
        return JsonResponse(plan_serializer.data,safe=False)
    elif request.method=='POST':
        plan_data=JSONParser().parse(request)
        plan=Plan.objects.get(plan_id=plan_data['plan_id'])
        plan_serializer=PlanSerializer(plan,partial=True)
        activity=plan_serializer.data.get('plan_activity')
        activity.append(id)
        plan_serializer.data.update({'plan_activity':activity})
        p=PlanSerializer(plan,data=plan_serializer.data)
        if p.is_valid():
            p.save()
            return JsonResponse(p.data)
        return JsonResponse(p.errors)
    elif request.method=='DELETE':
        plan_data=JSONParser().parse(request)
        plan=Plan.objects.get(plan_id=plan_data['plan_id'])
        plan_serializer=PlanSerializer(plan,partial=True)
        activity=plan_serializer.data.get('plan_activity')
        activity.remove(int(id))
        plan_serializer.data.update({'plan_activity':activity})
        p=PlanSerializer(plan,data=plan_serializer.data)
        if p.is_valid():
            p.save()
            return JsonResponse(p.data)
        return JsonResponse(p.errors)

@csrf_exempt
def StatisticsApi(request,id=0):
    if request.method=='GET':
           user = Statistics.objects.all().order_by('st_date').reverse()[:12]
           user_serializer=StatisticSerializer(user,many=True)
           return JsonResponse(user_serializer.data,safe=False)
    elif request.method=='POST':
        try :
            stat_last_month=Statistics.objects.get(st_date = date(datetime.now().year,datetime.now().month-1, 28))
            serializer=StatisticSerializer(stat_last_month)
            return JsonResponse(serializer.data,safe=False)
        except Statistics.DoesNotExist:
            nb_Pub=Publication.objects.filter(pub_date__gt = date(datetime.now().year,datetime.now().month-1, 1)).filter(pub_date__lt = date(datetime.now().year,datetime.now().month-1, 28)).count()
            nb_user=User.objects.filter(user_dateOfJoin__gt = date(datetime.now().year,datetime.now().month-1, 1)).filter(user_dateOfJoin__lt = date(datetime.now().year,datetime.now().month-1,28)).count()
            nb_sugg=Publication.objects.filter(pub_date__gt = date(datetime.now().year,datetime.now().month-1, 1)).filter(suggestion=True).filter(pub_date__lt = date(datetime.now().year,datetime.now().month-1,28)).count()
            info={"st_date": date(datetime.now().year,datetime.now().month-1, 28),"st_nb_user": nb_user,"st_nb_pub": nb_Pub,"st_nb_sugg": nb_sugg}
            stat=StatisticSerializer(data=info)
            stat.is_valid()
            stat.save()
            return JsonResponse(stat.data,safe=False)
    elif request.method=='PUT':
        nb_Pub=Publication.objects.filter(pub_date__gt = date(datetime.now().year,datetime.now().month-1, 28)).count()
        nb_user=User.objects.filter(user_dateOfJoin__gt = date(datetime.now().year,datetime.now().month-1, 28)).count()
        nb_sugg=Publication.objects.filter(pub_date__gt = date(datetime.now().year,datetime.now().month-1, 27)).filter(suggestion=True).filter(pub_date__lt = date(datetime.now().year,datetime.now().month,28)).count()
        info={"st_nb_user": nb_user,"st_nb_pub": nb_Pub,"st_nb_sugg": nb_sugg}
        return JsonResponse(info,safe=False)

