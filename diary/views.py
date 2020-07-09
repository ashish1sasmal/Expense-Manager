from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View

from .forms import *
# Create your views here.

class Diary(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        form = DiaryNote()
        notes = Diarynote.objects.all().order_by("-updated_on")
        context = {"form":form,'notes':notes}
        return render(request,"diary/diary2.html",context)
