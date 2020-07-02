from django.db import models
import datetime
# Create your models here.

class Event(models.Model):
    date = models.DateTimeField( default=datetime.datetime.now )
    summary = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.date.strftime('%d-%b-%Y, %I:%M %p')}"
