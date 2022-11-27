from django.contrib import admin
from .models import Department, Student ,Date

# Register your models here.

admin.site.register(Student)
admin.site.register(Department)
admin.site.register(Date)