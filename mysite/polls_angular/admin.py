from django.contrib import admin

# Register your models here.
from polls_angular.models import FormGroup


class FormGroupAdmin(admin.ModelAdmin):
    model = FormGroup

    list_display = ("id", "name", "gender", "age", "address", "city", "country", "status", "date")
    search_fields = ("id", "name", "gender", "age", "address", "city", "country", "status", "date")
    list_filter = ("name", "gender", "country",)


admin.site.register(FormGroup, FormGroupAdmin)
