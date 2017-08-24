from rest_framework import serializers
from django.contrib.auth.models import User, Group
from app.todolist import models


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    
    class Meta:
        model = models.Todo
        fields = '__all__'
