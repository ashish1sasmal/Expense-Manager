from django.urls import path

from . import views


urlpatterns = [
    path('diary/',views.Diary.as_view(),name='diary'),

]
