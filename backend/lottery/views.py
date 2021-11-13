from django.shortcuts import get_object_or_404, render
# Create your views here.
from game.models import Game
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User

from .serializers import (
                        BetSerializer,
                        GameSerializer,
                        RequestSerializer)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ViewSet
from .models import Bet, QuoteManager, Request, Ticket

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

@permission_classes([IsAuthenticated])
class RequestView(ViewSet):
    def create(self, request):
        data = request.data
        data_serializable = {
            "user": request.user.id,
            "option": int(data['option']),
            "quotes": int(data['quotes'])
        }
        serializer = RequestSerializer(data = data_serializable)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data, status=status.HTTP_201_CREATED)

@permission_classes([IsAuthenticated])       
class BetView(ViewSet):
    def list(self, request):
        requests = Request.objects.filter(user = request.user)
        print(requests)
        bets = []
        for r in requests.all():
            try:
                qm = QuoteManager.objects.get(request=r)
                ticket = qm.ticket
            except QuoteManager.DoesNotExist:
                continue
            print(ticket)
            bets += Bet.objects.filter(ticket__id=ticket.id)
        print(bets)
        serializer = BetSerializer(bets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)