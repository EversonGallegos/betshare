from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.decorators import parser_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import login, logout, authenticate
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import UserAddress, UserDocs
from .serializer import UserSerializer
# Create your views here.

@parser_classes([JSONParser])
class Login(APIView):
    permission_classes = [AllowAny, ]
    def post(self, request):
        data = request.data
        username = data['username']
        password = data['password']
        print(username, password)
        user = authenticate(request, username=username, password=password)
        print(user)
        if(user is not None):
            login(request, user)
            token = Token.objects.get(user__username=username)
            return Response(data={"token":token.key}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class Logout(APIView):
    permission_classes = [IsAuthenticated,]
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

@parser_classes([JSONParser])
class Register(APIView):
    permission_classes = [AllowAny,]
    def post(self, request):
        data = request.data
        try:
            if(User.objects.get(username=data['username'])):
                return Response({"message":"username já cadastrado"}, status=status.HTTP_400_BAD_REQUEST)
            elif(User.objects.get(username=data['email'])):
                return Response({"message":"email já cadastrado"}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            user = User.objects.create_user(data['username'], data['email'], data['password'])
            user.save()
        return Response(data={"user":user.username},status=status.HTTP_201_CREATED)


class CheckCreditals(APIView):
    permission_classes = [AllowAny,]
    @parser_classes([JSONParser,])
    def put(self, request):
        data =  request.data
        username =  data['username']
        email = data['email']
        username_isvalid = False
        email_isvalid = False
        try:
            user = User.objects.get(username=username)
        except:
            username_isvalid = True
        try:
            user = User.objects.get(email=email)
        except:
            email_isvalid = True
        return Response({'username_isvalid': username_isvalid, 'email_isvalid': email_isvalid})


class RegisterPersonalInfo(APIView):
    def get(self, request):
        data = request.data
        try:
            user = User.objects.get(id = request.user.id)
            first_name = user.first_name
            last_name = user.last_name
            docs = UserDocs.objects.get(user = user)
            rg = docs.RG
            cpf = docs.CPF
            date_of_birth = docs.date_of_birth
            phone = docs.phone
            form = {"first_name": first_name,
                    "last_name": last_name,
                    "rg": rg,
                    "cpf": cpf,
                    "date_of_birth": date_of_birth,
                    "phone": phone}
            return Response(form, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        data = request.data
        try:
            user = User.objects.get(id=request.user.id)
            user.first_name = data['first_name']
            user.last_name = data['last_name']
            date = data['date_of_birth'].split('/')
            date = date[2]+'-'+date[1]+'-'+date[0]
            docs = UserDocs.objects.create(
                user=user, 
                RG=data['rg'], 
                date_of_birth=date,
                CPF=data['cpf'],
                phone=data['phone'])
            user.save()
            docs.save()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class RegisterAddressInfo(APIView):
    def post(self, request):
        data = request.data
        try:
            user = User.objects.get(id = request.user.id)
            print(data)
            user_address = UserAddress.objects.create(
                user = user,
                street =  data['street'],
                quarter = data['quarter'],
                postal_code = data['postal_code'],
                city = data['city'],
                state = data['state']   
            )
            user_address.save()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user = request.user
        try:
            userAddress = UserAddress.objects.get(user=user)
            data = {
                "street" : userAddress.street,
                "quarter" : userAddress.quarter,
                "city" : userAddress.city,
                "postal_code" : userAddress.postal_code,
                "state" : userAddress.state
            }
            return Response(data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)



class getUserData(APIView):
    def get(self, request):
        user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)