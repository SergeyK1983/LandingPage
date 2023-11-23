from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import UserCreateView, UserGetAPIView


urlpatterns = [
    path('users/', UserCreateView.as_view(), name='user-list-create'),
    path('users/salary/', UserGetAPIView.as_view(), name='user-salary'),
    # path('users/<int:pk>/calculate-salary/', SalaryCalculationView.as_view(), name='calculate-salary'),
]
