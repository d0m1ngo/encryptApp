from rest_framework import serializers
from api.models import Text

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('id', 'encrypted_text', 'encrypted', 'default_text')