from django.db import models
from datetime import date,datetime
# Create your models here.

addchoices = (('OA','Added'),('OS','Given'),('PS','Personal'),('RET','Returned'))

class AddMoney(models.Model):
    to = models.CharField(max_length=30,blank=False,null=False)
    date = models.DateField(default=date.today)
    amount = models.DecimalField(max_digits=10,decimal_places=2)
    reason = models.CharField(max_length=100)
    status = models.CharField(max_length=3,choices=addchoices,default="PS")

    def __str__(self):
        return f"{self.to}_{self.date}_{self.amount}"

class Totalmoney(models.Model):
    total = models.DecimalField(max_digits=10,decimal_places=2)
    created_on = models.DateTimeField(default=datetime.now,blank=False)
    updated_on = models.DateTimeField(default=datetime.now,blank=False)

    def __str__(self):
        return f"{self.total}___{self.updated_on.strftime('%d-%b-%Y, %I:%M %p')}"
