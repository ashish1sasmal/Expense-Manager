# @Author: ASHISH SASMAL <ashish>
# @Date:   03-09-2020
# @Last modified by:   ashish
# @Last modified time: 02-11-2020



from django.db import models

# Create your models here.
import datetime
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    password = models.CharField(max_length=20)

    def __str__(self):
    	return f'{self.user.username} Profile'

class Diarynote(models.Model):
    # sub = models.CharField(max_length=50)
    text = models.TextField(max_length=5000,null=True,blank=True)
    created_on = models.DateTimeField( default=datetime.datetime.now )
    updated_on = models.DateTimeField( default=datetime.datetime.now )

    def __str__(self):
        return str(self.created_on.strftime('%d-%b-%Y, %I:%M %p'))
