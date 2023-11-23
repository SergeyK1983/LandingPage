from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    userName = serializers.CharField(source='full_name')
    userAge = serializers.IntegerField(source='age')
    userContact = serializers.CharField(source='contact')
    userProfession = serializers.CharField(source='profession')
    userExperience = serializers.IntegerField(source='experience')
    userSalary = serializers.FloatField(source='monthly_income')

    class Meta:
        model = User
        fields = (
            'userName',
            'userAge',
            'userContact',
            'userProfession',
            'userExperience',
            'userSalary',
        )


# class SalaryCalcSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = (
#             'hourly_salary',
#         )
        # extra_kwargs = {'hourly_salary': {'read_only': True}}
