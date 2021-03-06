from django.shortcuts import render,redirect,reverse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect ,Http404
from django.views.generic import View
from django.contrib import messages
from .models import *
from datetime import datetime

from django.contrib.auth.models import User

# Create your views here.

class Diary(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        print(request.session.get_expiry_date())
        # request.session.set_expiry(20)
        notes = Diarynote.objects.all().order_by("-updated_on")
        context = {'notes':notes}
        return render(request,"diary/diary2.html",context)



    def post(self,request,*args,**kwargs):
        print(request.POST)

        if 'en' in request.POST:
            nid =request.POST.get("en")
            past = Diarynote.objects.get(id=nid)
            past.text = request.POST.get("edit"+nid)
            past.updated_on = datetime.now()
            past.save()
        elif 'entry' in request.POST:

            t = request.POST.get("entry")
            en = Diarynote(text=t)
            en.save()

        messages.success(request,'Your thoughts are preserved.')
        return redirect('diary')

class Diary_login(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        return render(request,"diary/diary.html")

    def post(self,request,*args,**kwargs):
        print(request.POST.get("passme"))
        if request.POST.get("passme") == request.user.profile.password:
            request.session.set_expiry(120)
            return HttpResponseRedirect(reverse('diary'))
        else:
            return redirect('diary_login')
