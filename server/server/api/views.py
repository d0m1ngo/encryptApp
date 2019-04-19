from api.models import Text
from api.serializers import TextSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
import logging

# Create your views here.

class TextViewSet(viewsets.ViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    def retrieve(self, request, pk=None):
        filtered_obj = Text.objects.get(pk=pk)
        if not filtered_obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            serializer = TextSerializer(filtered_obj)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            print('saveing text')
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

