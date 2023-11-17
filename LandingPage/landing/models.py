from django.db import models

class User(models.Model):
    full_name = models.CharField(max_length=255, verbose_name="ФИО")
    age = models.IntegerField(verbose_name="Возраст")
    contact = models.CharField(max_length=255, verbose_name="Контакт")
    profession = models.CharField(max_length=255, verbose_name="профессия")
    experience = models.IntegerField(verbose_name="Стаж")
    monthly_income = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Доход в месяц")
    hourly_salary = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, verbose_name="Доход в час")
    date_create = models.DateTimeField(auto_now_add=True, verbose_name="Дата публикации")

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def save(self, *args, **kwargs):
        self.hourly_salary = self.calculate_hourly_salary()
        super().save(*args, **kwargs)

    def calculate_hourly_salary(self):
        working_days_per_month = 22
        hours_per_day = 8

        hourly_salary = self.monthly_income / (working_days_per_month * hours_per_day)

        return hourly_salary

    def __str__(self):
        return self.full_name

