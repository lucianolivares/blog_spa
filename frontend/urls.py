from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('entradas/<int:pk>/', index)
]