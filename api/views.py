from django.core.exceptions import AppRegistryNotReady
from django.http import response
from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import EntradaSerializer
from .models import EntradaModel


# Create your views here.
class EntradaView(ListAPIView):
    queryset = EntradaModel.objects.all()
    serializer_class = EntradaSerializer