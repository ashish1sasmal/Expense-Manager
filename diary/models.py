from django.db import models

# Create your models here.
from ckeditor.fields import RichTextField
import datetime

class Diarynote(models.Model):
    sub = models.CharField(max_length=50)
    text = RichTextField(null=True,blank=True)
    created_on = models.DateTimeField( default=datetime.datetime.now )
    updated_on = models.DateTimeField( default=datetime.datetime.now )

    def __str__(self):
        return self.sub+"__"+str(self.created_on.strftime('%d-%b-%Y, %I:%M %p'))