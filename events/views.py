from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
# Create your views here.

class Events(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        return render(request,'events/calendar.html')
