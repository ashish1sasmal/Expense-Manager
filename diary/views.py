from django.shortcuts import render,redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
from django.contrib import messages
from .models import *

# Create your views here.

class Diary(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):

        notes = Diarynote.objects.all().order_by("-updated_on")
        context = {'notes':notes}
        return render(request,"diary/diary2.html",context)

    def post(self,request,*args,**kwargs):
        t = request.POST.get("entry")
        en = Diarynote(text=t)
        en.save()
        messages.success(request,'Your thoughts are preserved.')
        return redirect('diary')
