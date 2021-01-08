from django.core.exceptions import AppRegistryNotReady
from django.db.models import query
from django.http import response
from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import EntradaSerializer
from .models import EntradaModel


# Create your views here.
class EntradaView(ListAPIView):
    queryset = EntradaModel.objects.all().order_by('-pub_date')[:3]
    serializer_class = EntradaSerializer