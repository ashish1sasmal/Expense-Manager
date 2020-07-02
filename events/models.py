from django.db import models
import datetime
# Create your models here.

class Events(models.Model):
    date = models.DateField( default=datetime.date.today )
    time = models.TimeField(auto_now_add=True)
    summary = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.date.strftime('%d-%b-%Y')}__{self.time.strftime('%I:%M %p')}"
