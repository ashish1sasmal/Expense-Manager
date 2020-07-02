# Generated by Django 3.0.4 on 2020-07-02 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('money', '0003_remove_addmoney_returned'),
    ]

    operations = [
        migrations.AddField(
            model_name='addmoney',
            name='status',
            field=models.CharField(choices=[('OA', 'Added'), ('OS', 'Given'), ('PS', 'Personal'), ('RET', 'Returned')], default='PS', max_length=3),
        ),
    ]
