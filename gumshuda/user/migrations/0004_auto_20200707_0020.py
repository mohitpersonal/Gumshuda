# Generated by Django 3.0.2 on 2020-07-06 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_auto_20200706_2327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registereduser',
            name='otp_valid_time',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
