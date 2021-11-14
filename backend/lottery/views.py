from django.shortcuts import get_object_or_404, render
# Create your views here.
from game.models import Game
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User

from .serializers import (
                        BetSerializer,
                        ContestSerializer,
                        GameSerializer,
                        RequestSerializer,
                        TicketSerializer)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ViewSet
from .models import Bet, Contest, QuoteManager, Request, Ticket

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
    
    def list(self, request):
        req = Request.objects.filter(user = request.user)
        serializer = RequestSerializer(req, many=True)
        print(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk):
        try:
            req = Request.objects.filter(user=request.user).get(id=pk)
            serializer = RequestSerializer(req)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Request.DoesNotExist:
            return Response({'error':'request not found'},status=status.HTTP_404_NOT_FOUND)

@permission_classes([IsAuthenticated])
class ContestView(ViewSet):
    def retrieve(self, request, pk):
        try:
            data = Contest.objects.get(pk=pk)
            serializer = ContestSerializer(data)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Contest.DoesNotExist:
            return Response({'error':'contest not found'}, status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        data = Contest.objects.all()
        serializer = ContestSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@permission_classes([IsAuthenticated])       
class BetView(ViewSet):
    def retrieve(self, request, pk):
        requests = Request.objects.filter(user = request.user)
        bet = None
        for r in requests.all():
            try:
                qm = QuoteManager.objects.get(request=r)
                ticket = qm.ticket
                bet = Bet.objects.get(id=pk, ticket__id=ticket.id)
            except:
                continue
        if(not bet is None):
            serializer = BetSerializer(bet)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Bet not found'}, status=status.HTTP_404_NOT_FOUND)
    def list(self, request):
        requests = Request.objects.filter(user = request.user)
        bets = []
        for r in requests.all():
            try:
                qm = QuoteManager.objects.get(request=r)
                ticket = qm.ticket
            except QuoteManager.DoesNotExist:
                continue
            bets += Bet.objects.filter(ticket__id=ticket.id)
        serializer = BetSerializer(bets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

permission_classes([IsAuthenticated])
class TicketView(ViewSet):
    
    def retrieve(self, request, pk):
        requests = Request.objects.filter(user = request.user)
        for r in requests.all():
            try:
                qm = QuoteManager.objects.get(request=r)
                ticket = qm.ticket
                if(ticket.id == pk):
                    serializer =  TicketSerializer(ticket)
                    return Response(serializer.data, status=status.HTTP_200_OK)
            except:
                continue
        return Response({'error':'ticket not found'}, status=status.HTTP_404_NOT_FOUND)
    
    def list(self, request):
        requests = Request.objects.filter(user = request.user)
        tickets = []
        for r in requests.all():
            try:
                qm = QuoteManager.objects.get(request=r)
                tickets.append(qm.ticket)
            except:
                continue
        print(tickets)
        if(len(tickets) > 0):
            serializer =  TicketSerializer(tickets, many=True)
            return Response(
                    serializer.data, 
                    status=status.HTTP_200_OK)
        return Response(
                {'error':'ticket not found'}, 
                status=status.HTTP_404_NOT_FOUND)
