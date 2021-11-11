from rest_framework import serializers

from game.models import Game, Option

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('numbers', 'price', 'chance','quote_value')
    #numbers = serializers.IntegerField()
    #price = serializers.FloatField()
    #chance = serializers.FloatField()


class GameSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True)
    class Meta:
        model = Game
        fields = ('name', 'color', 'is_active', 'options')

        #name = serializers.CharField()
        #color = serializers.CharField()
        #is_active = serializers.BooleanField()
        #options = OptionSerializer(many=True)