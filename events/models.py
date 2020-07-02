from django.db import models
from datetime import datetime
# Create your models here.

class Events(models.Model):
    event_on = models.DateTimeField( default=datetime.now )
    summary = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.date.strftime('%d-%b-%Y')}__{self.time.strftime('%I:%M %p')}"
