# Generated by Django 4.2.3 on 2023-08-24 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bid',
            name='bid_text',
            field=models.TextField(default='bid'),
            preserve_default=False,
        ),
    ]