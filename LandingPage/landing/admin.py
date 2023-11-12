from django.contrib import admin
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'full_name',
        'age', 'contact',
        'profession', 'experience',
        'monthly_income',
        'hourly_salary',
        'date_create'
    )

    list_display_links = ('id',)


admin.site.register(User, UserAdmin)
