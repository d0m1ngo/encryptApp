from api.models import Text
from api.serializers import TextSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from rest_framework.views import APIView
from api.EncryptHelpers import decode, encode

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
            decodedText = decode(request.GET['password'], serializer.data['encrypted_text'])
            if decodedText == serializer.data['default_text']:
                newData = serializer.data
                newData['encrypted_text'] = decodedText
                newData['encrypted'] = False
                return Response(newData, status=status.HTTP_200_OK)
            else:
                newData = serializer.data
                newData['encrypted_text'] = decodedText
                newData['encrypted'] = True
                return Response(newData, status=status.HTTP_200_OK)
    
    def create(self, request):
        serializer = TextSerializer(data=request.data)
        if serializer.is_valid():
            encodedText = encode(request.data['password'], serializer.validated_data['default_text'])
            serializer.validated_data['encrypted_text'] = encodedText
            serializer.validated_data['encrypted'] = True
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def partial_update(self, request, pk=None):
        filtered_obj = Text.objects.get(pk=pk)
        serializer = TextSerializer(filtered_obj, data=request.data)
        if serializer.is_valid():
            encodedText = encode('1', serializer.validated_data['default_text'])
            serializer.validated_data['encrypted_text'] = encodedText
            serializer.validated_data['encrypted'] = True
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

            

