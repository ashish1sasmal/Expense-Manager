from django.shortcuts import render,redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
from django.contrib import messages
from .models import *
from datetime import datetime

# Create your views here.

class Events(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        all = Event.objects.all()
        return render(request,'events/calendar.html',{'all':all})


    def post(self,request,*args,**kwargs):
        d = request.POST.get("date1")+" 00:00:00"
        print(d)
        d = datetime.strptime(datetime.strptime(d, '%Y-%m-%d %H:%M:%S').strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')

        s = request.POST.get("summary")
        print(d,s)
        m = Event(date=d,summary=s)
        m.save()

        messages.success(request,'Event Added Successfully! Dated:'+str(d).replace('00:00:00',''))
        return redirect('calendar')
