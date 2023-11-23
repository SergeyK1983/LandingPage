from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .models import User
from .serializers import UserSerializer


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]  # [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid(raise_exception=True):
            serializer.save()


class UserGetAPIView(APIView):
    def get(self, request):
        salary = User.objects.values('hourly_salary').last()
        output = {
            'hourly_salary': salary.get('hourly_salary')
        }
        return Response(output)


# class SalaryCalculationView(generics.RetrieveUpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# @api_view(['POST'])
# def add_user(request):
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)


# class UserCreateView(APIView):
#     def post(self, request):
#         new_recording = User.objects.create(
#             full_name=request.data["userName"],
#             age=request.data['userAge'],
#             contact=request.data['userContact'],
#             profession=request.data['userProfession'],
#             experience=request.data['userExperience'],
#             monthly_income=request.data['userSalary'],
#         )
#
#         return Response({"post": model_to_dict(new_recording)})
