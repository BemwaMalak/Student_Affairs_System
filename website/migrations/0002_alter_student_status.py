# Generated by Django 4.0.4 on 2022-05-24 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='status',
            field=models.BooleanField(null=True),
        ),
    ]
