from django.db import models

def user_directory_path(instance, filename):
    return 'accounts/{0}/{1}'.format(instance.id, filename)


class Deliveryman(models.Model):
    sur_name = models.CharField(max_length=20, verbose_name="Фамилия")
    name = models.CharField(max_length=20, verbose_name="Имя")
    phone_number = models.CharField(max_length=12, verbose_name="Телефон")
    patronymic = models.CharField(max_length=20, verbose_name="Отчество", blank=True)
    #statistic = models.ForeignKey('Stats', on_delete=models.PROTECT, verbose_name="Статистика",blank=True, null=True)
    email = models.CharField(max_length=40, blank=True, null=True)
    login = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    #photo = models.ImageField(upload_to=user_directory_path, blank=True, verbose_name="Фото")
    '''def save(self):
        #a = Stats()
        #a.save()
        self.statistic = a
        print(self)
        print(self.statistic)
        super(Deliveryman, self).save()
    '''
    def __str__(self):
        return self.name + self.sur_name

class Stats(models.Model):
    lates_count = models.IntegerField(verbose_name="Количество опозданий", default="0")
    orders_count = models.IntegerField(verbose_name="Количество доставленных заказов", default="0")
    sum_time = models.IntegerField(verbose_name='Сумма времени потраченного на заказы')
    # mid_time = sun_time / orders_count
    time_created = models.DateTimeField(auto_now=True, verbose_name='Дата создания')
    def save(self):
        self.lates_count = 0
        self.orders_count = 0
        self.sum_time = 0
        super(Stats, self).save()
class Order(models.Model):
    adres = models.TextField(max_length=150, verbose_name='Улица Дом')
    dop_adres = models.TextField(max_length=150, verbose_name='Подъезд/этаж/квартира')
    cost = models.FloatField()
    name = models.CharField(max_length=20, verbose_name="Имя")
    time_limit = models.CharField(max_length=5)
    type_pay = models.ForeignKey('TypePay', on_delete=models.PROTECT, blank=True, null = True)
    coment = models.TextField(max_length=300, blank=True,verbose_name='Комментарий к заказу')
    client_number = models.CharField(max_length=12, verbose_name="Телефон заказчика")
    deliveryman_id = models.ForeignKey('Deliveryman', on_delete=models.PROTECT, verbose_name="Курьер", blank=True, null=True)
    status = models.ForeignKey('OrderStatus',on_delete=models.PROTECT, verbose_name="Статус заказа", blank=True, default=1, null=True)
    def save(self):
        status = OrderStatus.objects.all().get(id=1)
        super(Order, self).save()
    def __str__(self):
        return self.adres + ' - ' + str(self.cost)

class TypePay(models.Model):
    name = models.CharField(max_length=30, verbose_name="Тип оплаты")
    def __str__(self):
        return self.name

class OrderStatus(models.Model):
    name = models.CharField(max_length=30, verbose_name="Статус заказа")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Статус заказа'
        verbose_name_plural = 'Статусы заказов'

