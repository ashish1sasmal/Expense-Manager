from django import forms
from .models import *

class DiaryNote(forms.ModelForm):
    class Meta:
        model = Diarynote
        fields = ["text"]
