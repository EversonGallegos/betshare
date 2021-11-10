from django.contrib import admin
from .models import Ticket, Bet, Prize
# Register your models here.

class TicketAdmin(admin.ModelAdmin):
    list_display = ('quotes', 'contest', 'status',)
admin.site.register(Ticket,TicketAdmin)

class BetAdmin(admin.ModelAdmin):
    list_display = ('ticket', 'numbers', 'proof', 'status')
admin.site.register(Bet, BetAdmin)

class PrizeAdmin(admin.ModelAdmin):
    list_display = ('bet', 'total_prize', 'winning_numbers')
admin.site.register(Prize, PrizeAdmin)