from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View

from .forms import *
# Create your views here.

class Diary(LoginRequiredMixin,View):
    def get(self,request,*args,**kwargs):
        form = DiaryNote()
        context = {"form":form}
        return render(request,"diary/diary.html",context)
