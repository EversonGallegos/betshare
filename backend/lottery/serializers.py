from rest_framework import serializers
from lottery.models import Request
from game.models import (Game, Option)

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('numbers', 'price', 'chance','quote_value')

class GameSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)
    class Meta:
        model = Game
        fields = ('name', 'color', 'is_active', 'options')

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('user', 'option', 'quotes')
    