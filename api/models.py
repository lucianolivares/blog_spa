  
from enum import unique
from django.db import models

# Create your models here.
class AutorModel(models.Model):
    full_name = models.CharField(max_length=70, unique=True)

    def __str__(self):
        return self.full_name

class EntradaModel(models.Model):
    author_id = models.ForeignKey(AutorModel, on_delete=models.CASCADE)
    # author_name = AutorModel.objects.get(id=author_id.full_name)
    pub_date = models.DateField(null=True)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=200)
    image_url = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.title

class SingleEntradaModel(models.Model):
    entrada = models.ForeignKey(EntradaModel, on_delete=models.CASCADE)
    
    

    