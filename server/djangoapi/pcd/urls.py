from django.urls import re_path,path 
from pcd import views,views_login,views_Admin,views_User

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path(r'^admivn$',views.AdminApi), 
    re_path(r'^admivn/([a-z][A-Z]+)$',views.AdminApi),
    path('login/<str:id>', views_login.login),
    re_path(r'^publication$',views.PublicationApi),
    re_path(r'^publication/([a-z][A-Z]+)$',views.PublicationApi),
    re_path(r'^user$',views_Admin.UserApi),
    re_path(r'^user/([0-9]+)$',views_Admin.UserApi),
    re_path(r'^playlist$',views.PlaylistApi),
    re_path(r'^playlist/([0-9]+)$',views.PlaylistApi),
 
    re_path(r'^reaction$',views_User.Publication_ReactionApi),
    re_path(r'^reaction/([0-9]+)$',views_User.Publication_ReactionApi),
    re_path(r'^favorite$',views_User.FavoriteApi),
    re_path(r'^favorite/([0-9]+)$',views_User.FavoriteApi),

    re_path(r'^plan$',views_Admin.PlanApi),
    re_path(r'^plan/([0-9]+)$',views_Admin.PlanApi),
    re_path(r'^activity$',views_Admin.ActivityApi),
    re_path(r'^activity/([0-9]+)$',views_Admin.ActivityApi),
    re_path(r'^planactivity$',views_Admin.Plan_ActivityApi),
    re_path(r'^planactivity/([0-9]+)$',views_Admin.Plan_ActivityApi),

    re_path(r'^statistics$',views_Admin.StatisticsApi),
    re_path(r'^statistics/([0-9]+)$',views_Admin.StatisticsApi),
    
    re_path(r'^savefile/([0-9]+)$',views_User.SaveFileApi)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
