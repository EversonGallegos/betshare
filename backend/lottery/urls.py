from django.urls import path
from .views import (GamesView,
                    RequestView,
                    BetView)
urlpatterns = [
    path('games/', 
        GamesView.as_view({
            'get':'list'
        })),
    path('games/<int:pk>', 
        GamesView.as_view({
            'get':'retrieve'
        })),
    path('profile/request/', 
        RequestView.as_view({
            'post':'create'
        })),
    path('profile/bets/',
        BetView.as_view({
            'get':'list'
        }))
]
