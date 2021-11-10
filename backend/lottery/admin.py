from django.contrib import admin
from .models import (Request, 
                    QuoteManager, 
                    Contest,
                    Ticket,
                    Bet,
                    Prize)

# Register your models here.
class QuoteManageInLine(admin.TabularInline):
    model = QuoteManager
class RequestInLine(admin.StackedInline):
    model = Request
class BetInLine(admin.TabularInline):
    model = Bet
class PrizeInLine(admin.TabularInline):
    model = Prize
class TicketInLine(admin.TabularInline):
    model = Ticket

class RequestAdmin(admin.ModelAdmin):
    list_display = ('user', 
                    'option', 
                    'quotes', 
                    'price', 
                    'status')
    readonly_fields = ('price', )

class TicketAdmin(admin.ModelAdmin):
    list_display = ('contest', 
                    'status',)
    inlines = [QuoteManageInLine,
                BetInLine,]

class BetAdmin(admin.ModelAdmin):
    list_display = ('ticket',
                    'numbers',
                    'proof',
                    'status')
    inlines = [PrizeInLine, ]

class ContestAdmin(admin.ModelAdmin):
    list_display = ('game', 
                    'code', 
                    'status', 
                    'prize', 
                    'numbers_drawn')
    inlines = [TicketInLine,]

admin.site.register(Ticket,TicketAdmin)
admin.site.register(Request, RequestAdmin)
admin.site.register(Bet, BetAdmin)
admin.site.register(Contest, ContestAdmin)