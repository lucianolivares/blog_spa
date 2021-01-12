from django.core.exceptions import AppRegistryNotReady
from django.http import response
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import EntradaSerializer
from .models import EntradaModel


# Create your views here.
class EntradaView(generics.ListAPIView):
    queryset = EntradaModel.objects.all()
    serializer_class = EntradaSerializer

class LastNewsView(generics.ListAPIView):
    queryset = EntradaModel.objects.all()[:4]
    serializer_class = EntradaSerializer
    
class EntradaDetailView(generics.RetrieveAPIView):
    queryset = EntradaModel.objects.all()
    serializer_class = EntradaSerializer
    lookup_field = 'title'