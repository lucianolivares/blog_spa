from rest_framework import serializers
from .models import AutorModel, EntradaModel, SingleEntradaModel


class EntradaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaModel
        fields = ('author_id', 'title', 'body', 'image_url')

class SingleEntradaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SingleEntradaModel
        fields = ('author','pub_date', 'title', 'body', 'image_url')