# Generated by Django 4.2.7 on 2023-11-12 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255, verbose_name='ФИО')),
                ('age', models.IntegerField(verbose_name='Возраст')),
                ('contact', models.CharField(max_length=255, verbose_name='Контакт')),
                ('profession', models.CharField(max_length=255, verbose_name='профессия')),
                ('experience', models.IntegerField(verbose_name='Стаж')),
                ('monthly_income', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Доход в месяц')),
                ('hourly_salary', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, verbose_name='Доход в час')),
                ('date_create', models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')),
            ],
            options={
                'verbose_name': 'Пользователь',
                'verbose_name_plural': 'Пользователи',
            },
        ),
    ]
