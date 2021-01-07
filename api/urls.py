from django.urls import path
from .views import EntradaView

urlpatterns = [
    path('entradas', EntradaView.as_view()),
]