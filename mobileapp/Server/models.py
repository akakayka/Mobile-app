from django.db import models

def user_directory_path(instance, filename):
    return 'accounts/{0}/{1}'.format(instance.id, filename)

# Create your models here.
class Deliveryman(models.Model):
    sur_name = models.CharField(max_length=20, verbose_name="Фамилия")
    name = models.CharField(max_length=20, verbose_name="Имя")
    phone_number = models.CharField(max_length=12, verbose_name="Телефон")
    patronymic = models.CharField(max_length=20, verbose_name="Отчество", blank=True)
    lates_count = models.IntegerField(verbose_name="Количество опозданий", default="0")
    orders_count = models.IntegerField(verbose_name="Количество доставленных заказов", default="0")
    status = models.ForeignKey('DeliveryStatus', on_delete=models.PROTECT, verbose_name="Статус")
    photo = models.ImageField(upload_to=user_directory_path, blank=True, verbose_name="Фото")

class Order(models.Model):
    adres = models.TextField(max_length=150, verbose_name='Адрес доставки')
    coment = models.TextField(max_length=300, verbose_name='Комментарий к заказу')
    client_number = models.CharField(max_length=12, verbose_name="Телефон заказчика")
    deliveryman_id = models.ForeignKey('Deliveryman', on_delete=models.PROTECT, verbose_name="Курьер", blank=True)


class DeliveryStatus(models.Model):
    name = models.CharField(max_length=30, verbose_name="Статус заказа")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Статус заказа'
        verbose_name_plural = 'Статусы заказов'