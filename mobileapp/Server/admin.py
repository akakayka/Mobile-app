from django.contrib import admin

# Register your models here.
from .models import *
# Register your models here.
admin.site.register(Deliveryman)
admin.site.register(OrderStatus)
admin.site.register(Worker)
admin.site.register(Order)
