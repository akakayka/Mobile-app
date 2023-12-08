import json

from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.views.generic import ListView, UpdateView
from .models import *
from django.views import View
from django.forms.models import model_to_dict
class OrdersView(View):
    def get(self, request):
        Orders = Order.objects.all()
        data = serializers.serialize('json', Orders)
        return HttpResponse(data, content_type='application/json')
        # http://127.0.0.1:8000/available-orders


class OrderView(View):
    def get(self, request):
        order_id = request.GET.get('id')
        print(order_id)
        print("="*50)
        order = Order.objects.get(id=int(order_id))
        data = serializers.serialize('json', [order])
        return HttpResponse(data[1:-1], content_type='application/json')
        # http://127.0.0.1:8000/get-order-info?id=123
class UpdateOrder(View):
    def get(self, request):
        # Добавить логику присваивания статуса
        order_id = request.GET.get('id')
        status = request.GET.get('status')
        obj = Order.objects.all().get(id=order_id)
        obj.status = OrderStatus.objects.get(name=status)
        obj.save()
        data = serializers.serialize('json', [obj])
        return HttpResponse(data[1:-1], content_type='application/json')
        #http://127.0.0.1:8000/update-status-order?id=123&status=Доставляется

class DeliverymanStats(View):
    def get(self, request):
        user_id = request.GET.get('id')
        obj = Deliveryman.objects.all().get(id=user_id)
        stat = model_to_dict(obj.statistic)
        obj=model_to_dict(obj)
        del obj['id'], stat['id'], obj['photo']
        print(stat)
        print(obj)
        data = dict(list(obj.items()) + list(stat.items()))
        print(data)
        data = json.dumps(data)
        return HttpResponse(data, content_type='application/json')
        # http://127.0.0.1:8000/get-profile-info?id=123

class Login(View):
    def get(self, request):
        username = request.GET.get('username')
        password = request.GET.get('password')
        for deliveryMan in Worker.objects.filter(login=username):
            if username == deliveryMan.login:
                if password == deliveryMan.password:
                    return HttpResponse('1')
                else:
                    return HttpResponse('0')

        return HttpResponse('-1')

            # http://127.0.0.1:8000/login?username=aaa&password=123
