from django.db import models
from django.contrib.auth.models import User
# Create your models here.



class MissingPerson(models.Model):

	''''demonstrate docstring for confirm that this table is used for store details of mission person'''

	name = models.CharField(max_length = 35, null = True, blank = True)
	missing_person_image =models.FileField(null = True, blank = True)
	city = models.CharField(max_length = 100, null = True, blank = True)
	description = models.TextField(null = True, blank = True)
	created_on = models.DateTimeField(auto_now_add = True, null = True, blank = True)
	updated_on = models.DateTimeField(auto_now = True,null = True, blank = True)
	created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True,related_name='post_created_by')
	updated_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='post_updated_by')
	age =models.CharField(max_length = 100,null = True, blank = True)
	street = models.CharField(max_length = 100,null = True, blank = True)
	address = models.CharField(max_length = 100,null = True, blank = True)
	province = models.CharField(max_length = 100,null = True, blank = True)
	country = models.CharField(max_length = 100,null = True, blank = True)
	gender = models.CharField(max_length = 100,
		null = True, blank = True)
	is_in_found = models.BooleanField(default = True)
	contact = models.CharField(max_length = 100,null = True, blank = True)
	number = models.CharField(max_length = 100,null = True, blank = True)













class FoundPerson(models.Model):
	
	missing_person = models.ForeignKey(MissingPerson,on_delete = models.CASCADE,null = True, blank = True)
	name = models.CharField(max_length = 35, null = True, blank = True)
	missing_person_image =models.FileField(null = True, blank = True)
	age =models.CharField(max_length = 100,null = True, blank = True)
	city = models.CharField(max_length = 100, null = True, blank = True)
	province = models.CharField(max_length = 100,null = True, blank = True)
	country = models.CharField(max_length = 100,null = True, blank = True)
	gender = models.CharField(max_length = 100,
	null = True, blank = True)
	founder_person_address = models.TextField(null = True, blank = True)
	created_on = models.DateTimeField(auto_now_add = True, null = True, blank = True)
	updated_on = models.DateTimeField(auto_now = True,null = True, blank = True)
	created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True,related_name='found_person_updated')
	updated_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='founder_person_updated')
	founder_person_name = models.CharField(max_length = 100,null = True, blank = True)
	founder_person_email = models.CharField(max_length = 100,null = True, blank = True)
	is_in_found = models.BooleanField(default = True)

	founder_person_contact = models.CharField(max_length = 100,null = True, blank = True)
	number = models.CharField(max_length = 100,null = True, blank = True)





class MatchedUsers(models.Model):

	is_matched_with = models.BooleanField(default = False)
	founder_person_instance = models.ForeignKey(FoundPerson,on_delete = models.CASCADE, null = True, blank = True)
	user_detector = models.ForeignKey(User, on_delete = models.CASCADE, null = True, blank = True)



	