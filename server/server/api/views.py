from api.models import Text
from api.serializers import TextSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
import json
from django.http import JsonResponse
from rest_framework.views import APIView
import base64

# Create your views here.

def encode(key, clear):
    enc = []
    for i in range(len(clear)):
        key_c = key[i % len(key)]
        enc_c = chr((ord(clear[i]) + ord(key_c)) % 256)
        enc.append(enc_c)
    return base64.urlsafe_b64encode("".join(enc).encode()).decode()

def decode(key, enc):
    dec = []
    enc = base64.urlsafe_b64decode(enc).decode()
    for i in range(len(enc)):
        key_c = key[i % len(key)]
        dec_c = chr((256 + ord(enc[i]) - ord(key_c)) % 256)
        dec.append(dec_c)
    return "".join(dec)

class TextViewSet(viewsets.ViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    def retrieve(self, request, pk=None):
        filtered_obj = Text.objects.get(pk=pk)
        if not filtered_obj:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            serializer = TextSerializer(filtered_obj)
            decodedText = decode('1', serializer.data['encrypted_text'])
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
            print(serializer.validated_data)
            encodedText = encode('1', serializer.validated_data['default_text'])
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

            

class Encrypt(APIView):
    # parser_classes = (JSONParser,)
    def get(self, request):
        # data = request.data
        # data = json.loads(request.body)
        return Response({'received data': request.data})
        # return Response(serializer.data)
