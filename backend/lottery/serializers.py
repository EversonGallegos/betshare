from django.db.models import fields
from rest_framework import serializers
from lottery.models import (QuoteManager, 
                            Bet, 
                            Request,
                            Contest,
                            Ticket)
from game.models import (Game, Option)

class ContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest
        fields = '__all__'

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('numbers', 'price', 'chance','quote_value')

class GameSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)
    class Meta:
        model = Game
        fields = ('name', 'color', 'is_active', 'options', 'total_numbers', 'total_queues')

class QuoteManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteManager
        fields = ('ticket','request','transaction','quotes')

class RequestSerializer(serializers.ModelSerializer):
    quote_manager = QuoteManagerSerializer()
    class Meta:
        model = Request
        fields = ('user', 'option', 'quotes', 'price', 'status', 'quote_manager')
    
class BetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bet
        fields = ('ticket', 'contest', 'numbers', 'status')

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'