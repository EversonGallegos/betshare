from django.urls import path
from .views import GamesView
urlpatterns = [
    path('get_games/', GamesView.as_view({
        'get':'list'
    })),
    path('get_games/<int:pk>', GamesView.as_view({
        'get':'retrieve'
    }))
]
