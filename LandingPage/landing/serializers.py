from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'full_name',
            'age',
            'contact',
            'profession',
            'experience',
            'monthly_income',
            'hourly_salary',
        )