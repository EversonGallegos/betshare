from django.contrib import admin
from django.urls import path, include
from lottery import urls as urls_lottery
from user import urls as urls_user


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(urls_lottery)),
    path('auth/', include(urls_user)),
]


