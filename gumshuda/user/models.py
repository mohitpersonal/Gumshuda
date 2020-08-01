from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class RegisteredUser(models.Model):

    """ store register user extra information """

    user_instance = models.ForeignKey(User, on_delete = models.CASCADE, null = True, blank = True)
    number = models.CharField(max_length=60, null=True, blank=True)
    idCard = models.CharField(max_length=50,unique=True)
    token = models.CharField(max_length = 100, null = True, blank = True)
    verify_code = models.CharField(max_length = 6, null = True, blank = True)
    otp_time = models.DateTimeField(auto_now_add = True,null = True, blank = True)
    otp_valid_time = models.CharField(max_length = 100,null = True, blank = True)
    status = models.BooleanField(default = False)
    def __str__(self):

        """ return id of user """

        return 'id={0}'.format(self.id)
