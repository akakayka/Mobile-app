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

class GetMyOrder(View):
    def get(self, request):
        id = request.GET.get('id')
        order = Order.objects.filter(deliveryman_id=int(id)).filter(status = OrderStatus.objects.all().get(pk=2))
        order = serializers.serialize('json', [order[0]])
        if len(order) == 0:
            # Нет заказа
            return HttpResponse('-1', headers=headers)

        return HttpResponse(order, content_type='application/json', headers=headers)
        # http://127.0.0.1:8000/get-my-order?id=1
        # Вот пример возврата (это массив с одним элементом)
        # [{"model": "Server.order", "pk": 1, "fields": {"adres": "hh", "coment": "h", "client_number": "hh", "deliveryman_id": 1, "status": 2}}]

class GetHistoryOrders(View):
    def get(self, request):
        id = request.GET.get('id')
        order = Order.objects.filter(deliveryman_id=int(id)).filter(status = OrderStatus.objects.all().get(pk=3))
        order = serializers.serialize('json', [order_ for order_ in order])
        return HttpResponse(order, content_type='application/json', headers=headers)
        # http://127.0.0.1:8000/get-history?id=1



class OrderView(View):
    def get(self, request):
        order_id = request.GET.get('id')
        print(order_id)
        print("="*50)
        order = Order.objects.get(id=int(order_id))
        data = serializers.serialize('json', [order])
        return HttpResponse(data[1:-1], content_type='application/json', headers=headers)
        # http://127.0.0.1:8000/get-order-info?id=123
class EndOrder(View):
    def get(self, request):
        # Добавить логику присваивания статуса
        order_id = request.GET.get('id')
        obj = Order.objects.all().get(id=order_id)
        obj.status = OrderStatus.objects.get(pk = 3)
        obj.save()
        data = serializers.serialize('json', [obj])
        return HttpResponse(data[1:-1], content_type='application/json', headers=headers)
        # id заказа
        #http://127.0.0.1:8000/end-order?id=1
class CancelOrder(View):
    def get(self, request):
        # Добавить логику присваивания статуса
        order_id = request.GET.get('id')
        obj = Order.objects.all().get(id=order_id)
        obj.status = OrderStatus.objects.get(pk = 1)
        obj.deliveryman_id = None
        obj.save()
        data = serializers.serialize('json', [obj])
        return HttpResponse(data[1:-1], content_type='application/json', headers=headers)
        # id заказа
        # http://127.0.0.1:8000/cancel-order?id=1


class SetDeliveryman(View):
    def get(self, request):
        id_order = request.GET.get('id_order')
        id_deliveryman = request.GET.get('id_deliveryman')
        obj = Deliveryman.objects.all().get(id=id_deliveryman)
        order = Order.objects.all().get(id=id_order)
        if len(Order.objects.all().filter(status = OrderStatus.objects.all().get(pk=2)).filter(deliveryman_id = obj))>0 :
            # Дебил. У тебя уже есть заказ
            return HttpResponse(-2, content_type='application/json', headers=headers)
        if order.deliveryman_id:
            # Этот заказ уже занят
            return HttpResponse(-1, content_type='application/json', headers=headers)
        order.deliveryman_id=obj
        order.status = OrderStatus.objects.get(pk = 2)
        order.save()
        return HttpResponse(1, content_type='application/json', headers=headers)
        #http://127.0.0.1:8000/set-deliveryman?id_order=123&id_deliveryman=123

class DeliverymanStats(View):
    def get(self, request):
        user_id = request.GET.get('id')
        obj = Deliveryman.objects.all().get(id=user_id)
        order = Order.objects.filter(deliveryman_id=int(user_id)).filter(status = OrderStatus.objects.all().get(pk=2))
        if len(order) == 0:
            order = -1
        else:
            order = order[0].pk
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

        for deliveryMan in Deliveryman.objects.filter(login=username):
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
