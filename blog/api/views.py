from django.core.exceptions import AppRegistryNotReady
from django.http import response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import EntradaSerializer
from .models import EntradaModel


# Create your views here.
class EntradaView(APIView):
    serializer_class = EntradaSerializer

    def get(self, request, format=None):
        entrada = EntradaModel.objects.all()
        data = self.serializer_class(entrada[0]).data
        return Response(data, status=status.HTTP_200_OK)
