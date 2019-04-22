from django.db import models

# Create your models here.
class Text(models.Model):
    encrypted_text = models.TextField(default="smth")
    encrypted = models.BooleanField(default=False)
    default_text = models.TextField(default="smth")