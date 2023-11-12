from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models import User


class UserAPITest(APITestCase):
    def setUp(self):
        self.user_data = {
            'full_name': 'Jane Doe',
            'age': 25,
            'contact': 'jane@example.com',
            'profession': 'Designer',
            'experience': 3,
            'monthly_income': 4000.0,
        }

    def test_create_user(self):
        url = reverse('user-list-create')
        response = self.client.post(url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().full_name, 'Jane Doe')
        self.assertEqual(User.objects.get().hourly_salary, 5.68)
