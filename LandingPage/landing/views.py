from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .models import User, VisitorMessage
from .serializers import UserSerializer, VisitorMessageSerializer, SalaryCalcSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]  # [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid(raise_exception=True):
            serializer.save()


class UserGetListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = SalaryCalcSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        salary = User.objects.values('hourly_salary').last()
        output = {
            'hourly_salary': salary.get('hourly_salary')
        }
        return Response(output)


class VisitorMessageCreateView(generics.CreateAPIView):
    queryset = VisitorMessage.objects.all()
    serializer_class = VisitorMessageSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid(raise_exception=True):
            serializer.save()


# class UserGetAPIView(APIView):
#     def get(self, request):
#         salary = User.objects.values('hourly_salary').last()
#         output = {
#             'hourly_salary': salary.get('hourly_salary')
#         }
#         return Response(output)
