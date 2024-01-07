"""
URL configuration for mobileapp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Server.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('available-orders', OrdersView.as_view(), name='orders'),
    path('end-order', EndOrder.as_view(), name='order_update'),
    path('cancel-order', CancelOrder.as_view(), name='order_update'),
    path('get-profile-info', DeliverymanStats.as_view(), name='profile_info'),
    path('get-order-info', OrderView.as_view(), name='order_info'),
    path('login', Login.as_view(), name='login'),
    path('set-deliveryman', SetDeliveryman.as_view(), name='set_deliveryman'),
    path('get-my-order', GetMyOrder.as_view(), name='get_order'),
    path('get-history', GetHistoryOrders.as_view(), name='get_order'),
    path('get-geo', GetGeoPos.as_view(), name='get_order'),
]
