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
        with transaction.atomic():
            try:
                to = request.POST.get("to")
                reason = request.POST.get("reason")
                amt = request.POST.get("amount")
                date = request.POST.get("date")
                print(to,reason,amt,date)

                m = AddMoney(to=to,reason=reason,amount=float(amt),date=date,returned=False)


                last = Totalmoney.objects.last()
                print(last.total)
                last.total = last.total + decimal.Decimal(float(amt))
                last.updated_on = datetime.now()

                # last.save()
                # m.save()

                messages.success(request,'Balance Updated Successfully. Amount = '+str(amt))

                return redirect('addmoney')

            except Exception as e:
                print(str(e))
                messages.warning(request, 'An error occured. Please Try Again!')
                return redirect(reverse('addmoney'))

class Addmoney(LoginRequiredMixin, View):
    def get(self,request,*args,**kwargs):
        last = Totalmoney.objects.last()
        context = {'reason':'','last':last}

        return render(request,'money/addmoney.html',context)

    def post(self,request,*args,**kwargs):
        with transaction.atomic():
            try:
                to = request.POST.get("to")
                reason = request.POST.get("reason")
                amt = decimal.Decimal(request.POST.get("amount"))
                date = request.POST.get("date")
                print(amt,reason,amt,date)
                ret = False
                if request.POST.get("checkme"):
                    ret = True

                m = AddMoney(to=to,reason=reason,amount=amt,date=date,returned=ret)
                m.save()
                last = Totalmoney.objects.last()
                print(last.total,decimal.Decimal(float(amt)))
                last.total = last.total + decimal.Decimal(float(amt))
                last.updated_on = datetime.now()

                last.save()


                messages.success(request,'Balance Updated Successfully. Amount = '+str(amt))

                return redirect('addmoney')

            except Exception as e:
                print(str(e))
                messages.warning(request, 'An error occured. Please Try Again!')
                return redirect(reverse('addmoney'))
