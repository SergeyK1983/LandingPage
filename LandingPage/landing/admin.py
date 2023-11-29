from django.contrib import admin
from .models import User, VisitorMessage


class UserAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'full_name',
        'age',
        'contact',
        'profession',
        'experience',
        'monthly_income',
        'hourly_salary',
        'date_create'
    )

    list_display_links = ('id', 'age', 'monthly_income', 'date_create')
    search_fields = ('age', 'contact', 'profession')
    list_filter = ('date_create', 'age', 'profession', 'monthly_income')


class VisitorMessageAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'full_name',
        'contact',
        'message',
        'date_create'
    )

    list_display_links = ('id', )
    search_fields = ('full_name', 'contact')
    list_filter = ('date_create', )


admin.site.register(User, UserAdmin)
admin.site.register(VisitorMessage, VisitorMessageAdmin)
