# Generated by Django 4.0.1 on 2022-03-22 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pcd', '0002_alter_activity_activity_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_avatar',
            field=models.TextField(default='', max_length=10000),
        ),
    ]
