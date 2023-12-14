from django.urls import path

from .views import UserCreateView, UserGetListAPIView, VisitorMessageCreateView

urlpatterns = [
    path('users/', UserCreateView.as_view(), name='user-list-create'),
    path('users/salary/', UserGetListAPIView.as_view(), name='user-salary'),
    path('visitormessage/', VisitorMessageCreateView.as_view(), name='message-create'),
]
