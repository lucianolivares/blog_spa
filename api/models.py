from django.db import models

# Create your models here.
class EntradaModel(models.Model):
    author = models.CharField(max_length=50, unique=True)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=200)
    
