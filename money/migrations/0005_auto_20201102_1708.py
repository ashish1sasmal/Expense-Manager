# Generated by Django 3.1.1 on 2020-11-02 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('money', '0004_addmoney_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addmoney',
            name='status',
            field=models.CharField(choices=[('OA', 'Added'), ('OS', 'Given'), ('PS', 'Personal'), ('RET', 'Returned'), ('RETB', 'To Bank')], default='PS', max_length=4),
        ),
    ]
