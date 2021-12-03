# Generated by Django 3.2.9 on 2021-12-02 11:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('game', '0006_rename_queue_numbers_game_total_queues'),
        ('lottery', '0026_auto_20211122_2031'),
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
            name='option',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='option', to='game.option'),
        ),
        migrations.AlterField(
            model_name='request',
            name='status',
            field=models.CharField(choices=[('open', 'Open'), ('paid', 'Paid'), ('canceled', 'Canceled'), ('finished', 'Finished')], default='open', max_length=50),
        ),
        migrations.AlterField(
            model_name='request',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='userrequest', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='option',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ticketoption', to='game.option'),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='requests',
            field=models.ManyToManyField(default=None, null=True, related_name='ticketrequests', through='lottery.QuoteManager', to='lottery.Request'),
        ),
        migrations.AlterField(
            model_name='ticket',
            name='status',
            field=models.CharField(default='open', max_length=50),
        ),
    ]