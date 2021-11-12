from django.urls import path
from .views import (GamesView,
                    RequestView)
urlpatterns = [
    path('games/', 
        GamesView.as_view({
            'get':'list'
        })
    ),
    path('games/<int:pk>', 
        GamesView.as_view({
            'get':'retrieve'
        })
    ),
    path('request/', 
        RequestView.as_view({
            'post':'create'
        }))
]
