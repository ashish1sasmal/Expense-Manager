# @Author: ASHISH SASMAL <ashish>
# @Date:   03-09-2020
# @Last modified by:   ashish
# @Last modified time: 02-11-2020



from django.shortcuts import render, redirect, reverse
from .models import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import View
from datetime import datetime
from django.db import transaction
from django.contrib import messages
import decimal
from django.contrib.auth import authenticate
from django.contrib.auth import login,logout
from django.contrib.auth.decorators import login_required

from django.contrib.sessions.models import Session
from django.contrib.auth.models import User

import datetime

from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session
from django.http import HttpRequest, HttpResponse
from importlib import import_module
from django.conf import settings

from django.core import serializers
import json
from .mixins import *

import email, smtplib, ssl

from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

def email():
    subject = "Weekly Data"
    body = f'Date & Time : {datetime.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")}'
    sender_email = os.environ.get('EMAIL_ID')
    receiver_email = os.environ.get('EMAIL_ID')
    password = os.environ.get('EMAIL_PASS')

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    filename = "sample.json"  # In same directory as script
    with open(filename, "rb") as attachment:
        # Add file as application/octet-stream
        # Email client can usually download this automatically as attachment
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header(
        "Content-Disposition",
        f"attachment; filename= {filename}",
    )
    message.attach(part)
    text = message.as_string()
    # Log in to server using secure context and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, text)

    print("Email Sent")


class GetData(View,SerializeMixin):
    def get(self,request,*args,**kwargs):
        serialized_obj = self.serialize(NotesEntry.objects.all())
        json_object = json.dumps(serialized_obj, indent = 4)
        # Writing to sample.json
        print(json_object)
        with open("sample.json", "w") as outfile:
            outfile.write(serialized_obj)
        email()
        return HttpResponse("Data Sent")


def init_session(session_key):
    """
    Initialize same session as done for ``SessionMiddleware``.
    """
    engine = import_module(settings.SESSION_ENGINE)
    return engine.SessionStore(session_key)

def main():
    """
    Read all available users and all available not expired sessions. Then
    logout from each session.
    """
    now = datetime.datetime.now()
    request = HttpRequest()

    sessions = Session.objects.filter(expire_date__gt=now)
    print('1')
    users = dict(User.objects.values_list('id', 'username'))
    print(users)
    print('Found %d not-expired session(s).' % len(sessions))

    for session in sessions:
        username = session.get_decoded().get('_auth_user_id')
        request.session = init_session(session.session_key)

        logout(request)
        print('    Successfully logout %r user.' % username)

    print('All OK!')

@login_required
def user_logout(request):
    logout(request)
    return redirect('home')

class Notes(View):
    def get(self,request,*args,**kwargs):
        notes = NotesEntry.objects.all().order_by('-updated_on')
        return render(request,"money/notes.html",{"notes":notes})

    def post(self,request,*args,**kwargs):
        try:
            note = request.POST.get("notes")
            print(note)
            nt = NotesEntry(text=note)
            nt.save()
            messages.success(request,"Note has been added!")
        except:
            messages.warning(request,'Some error occured!')
        return redirect('notes')

# Create your views here.
def home(request):
    return render(request,'money/home.html')

class Userlogin(View):
    def get(self,request,*args,**kwargs):
        return render(request,"money/login.html")

    def post(self,request,*args,**kwargs):
        password = request.POST.get('password')
        print(password)
        user=authenticate(username="ashishsasmal01",password=password)
        if user:
            # main()
            request.session.set_expiry(settings.AUTO_LOGOUT_DELAY*60)
            login(request,user)
            messages.success(request,"You have been logged in!")
            print("logged in")
            return redirect('home')
        else:
            messages.warning(request,'Wrong input!')
        return render(request,"money/login.html")

class Moneydetail(LoginRequiredMixin, View):
    def get(self,request,*args,**kwargs):
        last = Totalmoney.objects.last()
        all = AddMoney.objects.all().order_by('-date')
        context = {'all':all,'last':last}
        return render(request,'money/moneydetail.html',context)

    def post(self,request,*args,**kwargs):
        am = AddMoney.objects.get(id=request.POST.get('paid'))
        if request.POST.get('tobank')=="1":
            am.status = "RETB"
        else:
            am.status = "RET"
        am.save()
        print(request.POST)

        last = Totalmoney.objects.last()
        print(last.total)
        if request.POST.get('tobank')!="1":
            last.total = last.total + decimal.Decimal(float(am.amount))
        last.updated_on = datetime.datetime.now()

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
        last.updated_on = datetime.datetime.now()

        last.save()


        messages.success(request,'Balance Updated Successfully. Amount = '+str(abs(float(amt))))

        return redirect('addmoney')
