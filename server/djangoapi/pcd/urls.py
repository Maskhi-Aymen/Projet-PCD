from django.urls import re_path,path 
from pcd import views

urlpatterns = [
    re_path(r'^admin$',views.AdminApi),
    re_path(r'^admin/([a-z][A-Z]+)$',views.AdminApi),
    path('login/<str:id>', views.login),
]
