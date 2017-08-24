from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from app.todolist import models, serializers
from rest_framework import filters

# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows todos to be viewed or edited.
    """
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering_fields = '__all__'