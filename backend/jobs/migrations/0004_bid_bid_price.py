# Generated by Django 4.2.3 on 2023-08-24 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0003_bid_created_at_bid_updated_at_job_created_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='bid',
            name='bid_price',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
