# Generated by Django 3.2.9 on 2021-11-10 22:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('lottery', '0011_auto_20211110_1046'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prize',
            old_name='prize',
            new_name='value',
        ),
        migrations.RemoveField(
            model_name='bet',
            name='proof',
        ),
        migrations.RemoveField(
            model_name='bet',
            name='win_prize',
        ),
        migrations.RemoveField(
            model_name='contest',
            name='numbers_drawn',
        ),
        migrations.RemoveField(
            model_name='prize',
            name='bet',
        ),
        migrations.RemoveField(
            model_name='prize',
            name='request',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='code',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='contest',
        ),
        migrations.AddField(
            model_name='bet',
            name='contest',
            field=models.ForeignKey(default=5, on_delete=django.db.models.deletion.CASCADE, to='lottery.contest'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bet',
            name='create_date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='prize',
            name='numbers',
            field=models.PositiveIntegerField(default=4),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='quotemanager',
            name='quotes',
            field=models.IntegerField(default=4),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='quotemanager',
            name='transaction',
            field=models.CharField(default=4, max_length=250),
            preserve_default=False,
        ),
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
            model_name='ticket',
            name='status',
            field=models.CharField(default='open', max_length=50),
        ),
        migrations.CreateModel(
            name='UserPrize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.FloatField()),
                ('proof', models.ImageField(upload_to='')),
                ('request', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lottery.request')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Draw',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numbers_drawn', models.CharField(blank=True, max_length=250, null=True)),
                ('date', models.DateField()),
                ('contest', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='lottery.contest')),
            ],
        ),
        migrations.AddField(
            model_name='prize',
            name='draw',
            field=models.ForeignKey(default=4, on_delete=django.db.models.deletion.CASCADE, to='lottery.draw'),
            preserve_default=False,
        ),
    ]
