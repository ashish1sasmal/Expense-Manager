from django.urls import path

from . import views


urlpatterns = [
    path('diary/',views.Diary.as_view(),name='diary'),
    path('diary_login/',views.Diary_login.as_view(),name='diary_login'),

]
