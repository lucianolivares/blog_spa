from django.contrib import admin
from .models import AutorModel, EntradaModel

# Register your models here.
admin.site.register(EntradaModel)
admin.site.register(AutorModel)