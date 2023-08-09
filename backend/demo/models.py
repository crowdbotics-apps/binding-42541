from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    email = models.EmailField(max_length=254,)
    description = models.CharField(max_length=255,)
    image = models.ImageField(upload_to="profile/image/images/",)

# Create your models here.
