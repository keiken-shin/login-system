from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from .models import UserCheck


class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']
        user_type = data['user_type']


        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'User already exists'})
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be greater than 6'})
                else:
                    user = User.objects.create_user(email=email, name=name, password=password)
                    UserCheck.objects.create(user_type=user_type, user=user)
                    return Response({'success': 'user created successfully'})
        else:
            return Response({'error': 'Passwords does not match'})

class UsercheckView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        try:
            user_type = UserCheck.objects.get(user__email__iexact=data['email']).user_type
            return Response({'type': f'{user_type}'})
        except:
            return Response({'error': 'Error in detecting type of user'}) 