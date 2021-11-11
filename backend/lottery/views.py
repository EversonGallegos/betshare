from django.shortcuts import get_object_or_404, render
# Create your views here.
from game.models import Game, Option
from .serializers.serializers import GameSerializer
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