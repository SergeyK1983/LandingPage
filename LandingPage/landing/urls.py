from django.urls import path
from .views import UserListCreateView, SalaryCalculationView


urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/calculate-salary/', SalaryCalculationView.as_view(), name='calculate-salary'),
]
