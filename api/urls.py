from django.urls import path
from .views import EntradaDetailView, EntradaView, LastNewsView

urlpatterns = [
    path('entradas', EntradaView.as_view()),
    path('last_news', LastNewsView.as_view()),
    path('entrada/<title>/', EntradaDetailView.as_view(), name='entrada-detail'),
]