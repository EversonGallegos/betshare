from django.urls import path
from .views import CheckCreditals, Login, Logout, Register, RegisterAddressInfo, RegisterPersonalInfo, getUserData

urlpatterns = [
    path('login/', Login.as_view()),
    path('logout/', Logout.as_view()),
    path('register/', Register.as_view()),
    path('register/personal/', RegisterPersonalInfo.as_view()),
    path('register/address/', RegisterAddressInfo.as_view()),
    path('user/', getUserData.as_view()),
    path('checkcredentials/', CheckCreditals.as_view()),
]
