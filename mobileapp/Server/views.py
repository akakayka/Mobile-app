import json

from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.views.generic import ListView, UpdateView
from .models import *
from django.views import View
from django.forms.models import model_to_dict
headers = {'Access-Control-Allow-Origin': '*',
                   'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
                   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'}
class OrdersView(View):
    def get(self, request):
        Orders = Order.objects.all().filter(deliveryman_id__isnull=True)
        data = serializers.serialize('json', Orders)
        return HttpResponse(data, content_type='application/json', headers=headers)
        # http://127.0.0.1:8000/available-orders


class OrderView(View):
    def get(self, request):
        order_id = request.GET.get('id')
        print(order_id)
        print("="*50)
        order = Order.objects.get(id=int(order_id))
        data = serializers.serialize('json', [order])
        return HttpResponse(data[1:-1], content_type='application/json', headers=headers)
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
        return HttpResponse(data[1:-1], content_type='application/json', headers=headers)
        #http://127.0.0.1:8000/update-status-order?id=123&status=Доставляется

class SetDeliveryman(View):
    def get(self, request):
        id_order = request.GET.get('id_order')
        id_deliveryman = request.GET.get('id_deliveryman')
        obj = Deliveryman.objects.all().get(id=id_deliveryman)
        order = Order.objects.all().get(id=id_order)
        for cur_order in Order.objects.all():
            if cur_order.deliveryman_id:
                if cur_order.deliveryman_id.pk == obj.pk:
                    return HttpResponse(-2, content_type='application/json', headers=headers)
        if order.deliveryman_id:
            return HttpResponse(-1, content_type='application/json', headers=headers)
        order.deliveryman_id=obj
        order.save()
        return HttpResponse(1, content_type='application/json', headers=headers)
        #http://127.0.0.1:8000/set-deliveryman?id_order=123&id_deliveryman=123

class DeliverymanStats(View):
    def get(self, request):
        user_id = request.GET.get('id')
        obj = Deliveryman.objects.all().get(id=user_id)
        order = -1
        for cur_order in Order.objects.all():
            if cur_order.deliveryman_id:
                if cur_order.deliveryman_id.pk == obj.pk:
                    order = cur_order.pk
        obj=model_to_dict(obj)
        data = dict(list(obj.items())+ [('order',order)])
        data = json.dumps(data)
        return HttpResponse(data, content_type='application/json', headers=headers)
        # http://127.0.0.1:8000/get-profile-info?id=123

class Login(View):

    def get(self, request):
        #return HttpResponse('24')
        username = request.GET.get('username')
        password = request.GET.get('password')

        for deliveryMan in Worker.objects.filter(login=username):
            if username == deliveryMan.login:
                if password == deliveryMan.password:
                    print(1)
                    return HttpResponse('1', headers=headers)
                else:
                    print(0)

                    return HttpResponse('0', headers=headers)
        print(-1)

        return HttpResponse('-1', headers=headers)

        # http://127.0.0.1:8000/login?username=aaa&password=123
