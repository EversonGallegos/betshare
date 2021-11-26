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
        fields = ('id', 'numbers', 'price', 'chance','quote_value')

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
    
class sendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('user', 'option', 'quotes', 'suggested_numbers')
class BetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bet
        fields = ('ticket', 'contest', 'numbers', 'status')

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

class GameName(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('name',)

class QuoteValue(serializers.ModelSerializer):
    game = GameName()
    class Meta:
        model = Option
        fields = ('game','quote_value','numbers')

class CartSerializer(serializers.ModelSerializer):
    option = QuoteValue()
    class Meta:
        model = Request
        fields = ('id', 'option', 'quotes', 'price')
