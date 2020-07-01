from django.db import models
from datetime import date,datetime
# Create your models here.

class AddMoney(models.Model):
    to = models.CharField(max_length=30,blank=False,null=False)
    date = models.DateField(default=date.today)
    amount = models.DecimalField(max_digits=10,decimal_places=2)
    reason = models.CharField(max_length=100)
    returned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.to}_{self.date}_{self.amount}"

class Totalmoney(models.Model):
    total = models.DecimalField(max_digits=10,decimal_places=2)
    created_on = models.DateTimeField(default=datetime.now,blank=False)
    updated_on = models.DateTimeField(default=datetime.now,blank=False)

    def __str__(self):
        return f"{self.total}___{self.updated_on.strftime('%d-%b-%Y, %I:%M %p')}"
