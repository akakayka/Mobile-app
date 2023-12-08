import requests, bs4


a = requests.get("http://127.0.0.1:8000/update-status-order?id=1&status=Доставляется")
print(a.json())
b = requests.get("http://127.0.0.1:8000/update-status-order", {'id':1, "status":"Заказ готовится"})
print(b.text)
print(b.json())

