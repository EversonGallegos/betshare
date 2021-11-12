from django.urls import path
from .views import Login, Logout, Register
from rest_framework.authtoken import views

urlpatterns = [
    path('login/', Login.as_view()),
    path('logout/', Logout.as_view()),
    path('register/', Register.as_view())
]

urlpatterns += [
    path('token-auth/', views.obtain_auth_token)
]