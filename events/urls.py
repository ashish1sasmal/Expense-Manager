from django.urls import path

from . import views


urlpatterns = [
    path('calendar/',views.Events.as_view(),name='calendar'),

]
