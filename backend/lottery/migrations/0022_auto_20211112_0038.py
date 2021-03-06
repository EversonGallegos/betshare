# Generated by Django 3.2.9 on 2021-11-12 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lottery', '0021_auto_20211112_0013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bet',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('no_prize', 'No Prize'), ('with_prize', 'With Prize')], default='pending', max_length=50),
        ),
        migrations.AlterField(
            model_name='contest',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('finished', 'Finished')], default='pending', max_length=50),
        ),
        migrations.AlterField(
            model_name='request',
            name='status',
            field=models.CharField(choices=[('open', 'Open'), ('paid', 'Paid'), ('canceled', 'Canceled'), ('finished', 'Finished')], default='open', max_length=50),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='status',
            field=models.CharField(default='open', max_length=50),
        ),
    ]
