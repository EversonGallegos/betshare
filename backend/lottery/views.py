from django.shortcuts import get_object_or_404, render
# Create your views here.
from game.models import Game, Option
from .serializers import (
                        GameSerializer,
                        RequestSerializer)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ViewSet

class GamesView(ViewSet):
    def list(self, request):
        queryset = Game.objects.all()
        serializer = GameSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Game.objects.all()
        game = get_object_or_404(queryset,pk=pk)
        serializer = GameSerializer(game)
        return Response(serializer.data)

class RequestView(ViewSet):
    def create(self, request):
        data = request.data
        print(request.user.id)
        data_serializable = {
            "user": request.user.id,
            "option": int(data['option']),
            "quotes": int(data['quotes'])
        }
        serializer = RequestSerializer(data = data_serializable)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data, status=status.HTTP_201_CREATED)
        