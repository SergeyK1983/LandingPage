from django.contrib import admin
from .models import User, VisitorMessage
from django.utils.translation import gettext_lazy as _


class MonthlyIncomeListFilter(admin.SimpleListFilter):
    title = _("Доход в месяц")
    parameter_name = "monthly_income"

    def lookups(self, request, model_admin):
        return [
            ("<100K", _("Меньше 100 тыс.р")),
            (">=100K", _("100 тыс.р и больше")),
        ]

    def queryset(self, request, queryset):
        if self.value() == "<100K":
            return queryset.filter(
                monthly_income__lt=100000,
            )
        if self.value() == ">=100K":
            return queryset.filter(
                monthly_income__gte=100000,
            )


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
    list_filter = ('date_create', MonthlyIncomeListFilter, )


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
