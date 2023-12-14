from rest_framework import generics, permissions
from rest_framework.response import Response

from .models import User, VisitorMessage
from .serializers import UserSerializer, VisitorMessageSerializer, SalaryCalcSerializer


class UserCreateView(generics.CreateAPIView):
    """
    Получение и сохранение данных пользователей в базу данных от формы чат-бота
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid(raise_exception=True):
            serializer.save()


class UserGetListAPIView(generics.ListAPIView):
    """
    Передача расчетного значения дохода в час посетителя в чат-бот
    """
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
    """
    Сбор данных обращения посетителя от формы обратной связи
    """
    queryset = VisitorMessage.objects.all()
    serializer_class = VisitorMessageSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        if serializer.is_valid(raise_exception=True):
            serializer.save()
