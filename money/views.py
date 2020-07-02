from django.shortcuts import render, redirect, reverse
from .models import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
from datetime import datetime
from django.db import transaction
from django.contrib import messages
import decimal

# Create your views here.
def home(request):
    return render(request,'money/home.html')


class Moneydetail(LoginRequiredMixin, View):
    def get(self,request,*args,**kwargs):
        last = Totalmoney.objects.last()
        all = AddMoney.objects.all().order_by('-date')
        context = {'all':all,'last':last}
        return render(request,'money/moneydetail.html',context)

    def post(self,request,*args,**kwargs):
        am = AddMoney.objects.get(id=request.POST.get('paid'))
        am.status = "RET"
        am.save()

        last = Totalmoney.objects.last()
        print(last.total)
        last.total = last.total + decimal.Decimal(float(am.amount))
        last.updated_on = datetime.now()

        last.save()
        # m.save()

        messages.success(request,'Amount added successfully! . Amount = '+str(am.amount))
        return redirect('moneydetail')


class Addmoney(LoginRequiredMixin, View):
    def get(self,request,*args,**kwargs):
        last = Totalmoney.objects.last()
        context = {'reason':'','last':last}

        return render(request,'money/addmoney.html',context)

    def post(self,request,*args,**kwargs):
        to = request.POST.get("to")
        reason = request.POST.get("reason")
        amt = decimal.Decimal(request.POST.get("amount"))
        date = request.POST.get("date")
        status = request.POST.get("status")
        print(amt,reason,amt,date)

        m = AddMoney(to=to,reason=reason,amount=amt,date=date,status=status)
        m.save()

        last = Totalmoney.objects.last()
        print(last.total,decimal.Decimal(float(amt)))
        if status in ["OS","PS"]:
            amt=-1*float(amt)
            
        last.total = last.total + decimal.Decimal(float(amt))
        last.updated_on = datetime.now()

        last.save()


        messages.success(request,'Balance Updated Successfully. Amount = '+str(abs(float(amt))))

        return redirect('addmoney')
