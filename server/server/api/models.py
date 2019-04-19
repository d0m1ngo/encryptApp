from django.db import models

# Create your models here.
class Text(models.Model):
    text = models.TextField()
    encrypted = models.BooleanField(default=False)
    