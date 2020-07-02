from django.shortcuts import render,redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
from django.contrib import messages
from .models import *

# Create your views here.

class Events(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        return render(request,'events/calendar.html')


    def post(self,request,*args,**kwargs):
        d = request.POST.get("date1")
        t = request.POST.get("time1")
        s = request.POST.get("summary")
        print(d,t,s)
        if t=="":
            m = Events(date=d,summary=s)

        else:
            m = Events(date=d,time=t,summary=s)
            

        messages.success(request,'Event Added Successfully! Dated:'+str(d))
        return redirect('calendar')
