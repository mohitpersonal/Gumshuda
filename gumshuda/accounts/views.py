from django.shortcuts import render,redirect
from django.views import View
from .models import MissingPerson,FoundPerson,MatchedUsers
from django.contrib.auth.models import User
from django.contrib import messages
import sys
import json
from facepplib import FacePP,exceptions
from django.contrib.sites.shortcuts import get_current_site


# Create your views here.

face_detection = ""
faceset_initialize = ""
face_search = ""
face_landmarks = ""
dense_facial_landmarks = ""
face_attributes = ""
beauty_score_and_emotion_recognization = ""

class MyEnteries(View):

	'''Demonstrate docstring for confim that this view based function is used for listing all enteries saved by particular user'''

	def get(self,request):
		try:
			user_obj = User.objects.get(id = int(request.user.id))
			all_missing_entry = MissingPerson.objects.filter(created_by = user_obj).order_by('-id')
			found_entry = FoundPerson.objects.filter(created_by = user_obj).order_by('-id')
			return render(request, 'dashboard.html', locals())
		except:
			return render(request, 'dashboard.html', locals())


class MatchedRecord(View):

	'''Demonstrate docstring for confim that this view based function is used listing all matched records for particular users'''

	def get(self,request):
		try:
			user_obj = User.objects.get(id = int(request.user.id))
			all_matched_records = MatchedUsers.objects.filter(is_matched_with = True,user_detector = user_obj)
			return render(request, 'all_matched_records.html', locals())
		except:
			return render(request, 'all_matched_records.html', locals())







class ViewMatchedRecordDetail(View):

	'''Demonstrate docstring for confim that this view based function is used view details of march record'''

	def get(self,request):
		try:
			id_request = self.request.GET.get('id')

			user_obj = User.objects.get(id = int(request.user.id))
			view_matched_record = MatchedUsers.objects.filter(is_matched_with = True,id=id_request,user_detector = user_obj)
			return render(request, 'view_match_record.html', locals())
		except:
			return render(request, 'view_match_record.html', locals())







class DetectPerson(View):

	'''Demonstrate docstring for confim that this view based function is used for Profile Page after login'''

	def get(self,request):
		try:
			return render(request, 'detect_person.html', locals())
		except:
			return render(request, 'detect_person.html', locals())


	def post(self,request):

		try:
			print("\n" * 3)
			main_image = self.request.FILES.get('main_image')
			site_url = get_current_site(request)
			site_url = str(site_url)
			make_path_upload = 'http://' + site_url + '/media/' + str(main_image)

			user_obj = User.objects.get(id = int(request.user.id))
			check_image_in_db = FoundPerson.objects.filter(is_in_found = True)

			api_key = "GFrsrj3V9rP-5GAS6cuntL4dUZdQ4vsD"
			api_secret = "uwtr6UrLHB4KWhpGA_KD4Vf_VlODUJis"
			try:
				facepp = FacePP(api_key=api_key,api_secret=api_secret)
				funcs = [
				face_detection,faceset_initialize,face_search,face_landmarks,dense_facial_landmarks,face_attributes,beauty_score_and_emotion_recognization]
			except Exception as e:
				print(e)
				messages.error(request, 'Something Went wrong,Please try again later')
				return render(request, 'detect_person.html')

			if check_image_in_db:
				for one_check in check_image_in_db:
					print("dddddddd")
					image = one_check.missing_person_image
					make_path_db = 'http://' + site_url + '/media/' + str(image)

					cmp_ = facepp.compare.get(image_url1 = make_path_upload, image_url2 = make_path_db)

					if cmp_.confidence > 70:
						objects_match = one_check
						detector_email = user_obj.email
						email_founder = check_image_in_db[0].founder_person_email
						MatchedUsers.objects.create(is_matched_with = True, founder_person_instance = objects_match, user_detector = user_obj)

						subject = 'Gumshuda : Matched Person Details'
						message = ""
						email_from = settings.EMAIL_HOST_USER
						recipient_list = [detector_email]
						msg_html = render_to_string('emails/detector_email.html',{'user_obj' : user_obj})


						subject = 'Gumshuda : Person Match with Your Record'
						message = ""
						email_from = settings.EMAIL_HOST_USER
						recipient_list = [email_founder]
						msg_html = render_to_string('emails/founder_email.html',{'user_obj': check_image_in_db[0]})
						send_mail(subject,message,email_from,recipient_list,html_message=msg_html,fail_silently=False)
						messages.success(request,'Your record has been successfully match with our databse. An email has been sent to you and founder with detailed instructions.')
						break
					else:
						messages.error(request,'No Record match,Please try again later')
			else:
				messages.error(request,'No Record match,Please try again later')

			return render(request, 'detect_person.html', locals())
		except:
			print(sys.exc_info())
			messages.error(request, 'Something Went wrong,Please try again later')
			return render(request, 'detect_person.html')
    	




class MissingPersonView(View):

	'''Demonstrate docstring for confim that this view based function is used for missing person template'''

	def get(self,request):
		context = {}
		return render(request, 'missing_person.html', locals())

	def post(self,request):

		try:
			name = self.request.POST.get('name')
			age = self.request.POST.get('age')
			street = self.request.POST.get('street')
			address = self.request.POST.get('address')


			city = self.request.POST.get('city')
			province = self.request.POST.get('province')
			e_country = self.request.POST.get('e_country')
			gender = self.request.POST.get('gender')

			contact_number = self.request.POST.get('contact_number')
			number_add = self.request.POST.get('number_add')
			main_image = self.request.FILES.get('main_image')
			user_obj = User.objects.get(id = int(request.user.id))
			address2 = self.request.POST.get('address2')
			MissingPerson.objects.create(name = name,
				missing_person_image = main_image, city = city, description = address2,
				created_by = user_obj,age = age,
				street = street, address = address,
				province = province,country = e_country,
				gender = gender,is_in_found = True, contact = contact_number, number = number_add)
			messages.success(request,'Thank you for your registration! Your Record has been successfully created')
			return render(request, 'missing_person.html')
		except:
			print(sys.exc_info())
			messages.error(request, 'Something Went wrong,Please try again later')
			return render(request, 'missing_person.html')
    	















class FoundPersonView(View):

	'''Demonstrate docstring for confim that this view based function is used for found person template'''

	def get(self,request):
		context = {}
		return render(request, 'found_person.html', locals())

	def post(self,request):
		print("inside post")

		try:
			main_image = self.request.FILES.get('main_image')

			name = self.request.POST.get('name')
			age = self.request.POST.get('age')
			city = self.request.POST.get('city')
			province = self.request.POST.get('province')
			e_country = self.request.POST.get('e_country')
			gender = self.request.POST.get('gender')
			founder_person_name = self.request.POST.get('founder_person_name')
			founder_email = self.request.POST.get('founder_email')

			founder_contact_number = self.request.POST.get('contact_number')
			number_add = self.request.POST.get('number_add')
			user_obj = User.objects.get(id = int(request.user.id))
			founder_person_address = self.request.POST.get('address2')
			FoundPerson.objects.create(name = name,
				missing_person_image = main_image, city = city, 
				created_by = user_obj,
				age = age,
				province = province,country = e_country,
				gender = gender,is_in_found = True,founder_person_name = founder_person_name, founder_person_email = founder_email, founder_person_contact = founder_contact_number, number = number_add, founder_person_address = founder_person_address)
			messages.success(request,'Thank you for your registration! Your Record has been successfully created')
			return render(request, 'found_person.html', locals())
		except:
			print(sys.exc_info())
			messages.error(request, 'Something Went wrong,Please try again later')
			return render(request, 'missing_person.html')
    	



class FoundPersonDelete(View):

	'''Demonstrate docstring for confim that this view based function will delte found person table records'''

	def get(self,request):
		try:
			get_id_record = self.request.GET.get('ids')
			user_obj = User.objects.get(id = int(request.user.id))
			FoundPerson.objects.filter(id = int(get_id_record),created_by = user_obj).delete()
			
			all_missing_entry = MissingPerson.objects.filter(created_by = user_obj).order_by('-id')
			return redirect('/accounts/')
		except:
			return redirect('/accounts/')



class MissingPersonDelete(View):

	'''Demonstrate docstring for confim that this view based function will delte missing person table records'''

	def get(self,request):
		try:
			missing_Record_id = self.request.GET.get('missing_id')
			user_obj = User.objects.get(id = int(request.user.id))
			MissingPerson.objects.filter(id = int(missing_Record_id),created_by = user_obj).delete()
			
			return redirect('/accounts/')
		except:
			return redirect('/accounts/')








class MissingViewSingle(View):

	'''Demonstrate docstring for confim that this view based function will delte found person table records'''

	def get(self,request):
		try:
			view_missing_id = self.request.GET.get('view_missing_id')
			user_obj = User.objects.get(id = int(request.user.id))
			missing_person_obj = MissingPerson.objects.get(id = int(view_missing_id),created_by = user_obj)
			print("missing_person is ------>",missing_person_obj)
			return render(request , 'missing_view.html', locals())
		except:
			print(sys.exc_info())
			return render(request , 'missing_view.html', locals())



class FoundView(View):

	'''Demonstrate docstring for confim that this view based function will delte found person table records'''

	def get(self,request):
		try:
			found_id_view = self.request.GET.get('found_id_view')
			user_obj = User.objects.get(id = int(request.user.id))
			found_obj = FoundPerson.objects.get(id = int(found_id_view),created_by = user_obj)
			
		
			return render(request , 'found_view.html', locals())
		except:
			print(sys.exc_info())
			return render(request , 'found_view.html', locals())






class FoundResult(View):

	def get(self,request):
		try:
			found_id_view = self.request.GET.get('found_id_view')
			user_obj = User.objects.get(id = int(request.user.id))
			found_obj = FoundPerson.objects.get(id = int(found_id_view),created_by = user_obj)
			
		
			return render(request , 'base/result_page.html', locals())
		except:
			print(sys.exc_info())
			return render(request , 'base/result_page.html', locals())

