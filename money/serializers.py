from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User
from django.db import transaction
from rest_framework.response import Response
from rest_framework import status
import json

class AddMoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = NotesEntry
        fields = "__all__"
