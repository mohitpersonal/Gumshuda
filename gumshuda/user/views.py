# https://www.pyimagesearch.com/2018/06/18/face-recognition-with-opencv-python-and-deep-learning/


from django.shortcuts import render
from django.views import View
from django.contrib.auth.models import User
from .models import RegisteredUser
from django.contrib import messages
from django.contrib.auth import authenticate, logout, login
import dateparser
from django.core.mail import send_mail

from django.http import HttpResponseRedirect, HttpResponse
from django.conf import settings
import random,sys
import string
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
import datetime

# Create your views here.

class RegisterView(View):

    '''Demonstrate Docstring for Accountant register View'''
    def get(self, request):
    	context = {}
    	return render(request, 'user/register.html', context)


    def post(self, request):
        try:
            site_url = get_current_site(request)
            site_url = str(site_url)

            first_name = self.request.POST['first_name']
            last_name = self.request.POST.get('last_name')
            password = self.request.POST['password'].strip()
            print(password)
            id_card = self.request.POST['id_card']
            email = self.request.POST.get('email')
            username = self.request.POST['email']
            phone = self.request.POST.get('phone')

            # make obj of class to save register info
            check_user_email = User.objects.filter(email= email).count()
            check_d_card = RegisteredUser.objects.filter(idCard = id_card)
            if check_user_email > 0:
                messages.error(request, 'Email already exists')
                return render(request, 'user/register.html')
            else:
                if check_d_card:
                    messages.error(request, 'Id Card already exists')
                    return render(request, 'user/register.html')
                else:

                   user_obj = User.objects.create(first_name=first_name, last_name=
                            last_name,email=email, username = id_card)
                   user_obj.set_password(password)
                   user_obj.save()
                   
                   letters = string.ascii_lowercase + string.ascii_uppercase +  string.digits 
                   user_token = ''.join(random.choice(letters) for _ in range(35))
                   create_rest_info = RegisteredUser.objects.create(user_instance = user_obj, number = phone, idCard = id_card, token = user_token)
                   subject = 'Activate Your Account'
                   message = ""
                   email_from = settings.EMAIL_HOST_USER
                   recipient_list = [email]
                   msg_html = render_to_string('emails/activate_account.html',{'user_obj': create_rest_info,'email': email,'token': user_token, 'site_url': site_url})
                   send_mail(subject,message,email_from,recipient_list,html_message=msg_html,fail_silently=False)
                   messages.success(request,'Thank you for your registration! Your account has been successfully created. An email has been sent to you with detailed instructions on how to activate it')
                   return render(request, 'user/register.html')

        except :
            print(sys.exc_info())
            messages.error(request,'An error occurred in registering your account, please try again or contact us')
            return render(request, 'user/register.html')


class ConfirmationView(View):

    '''Confirmation of email registeration'''

    def get(self, request):
        try:
            token = self.request.GET.get('token')
            email = self.request.GET.get('email')
            try:
                checkemail = User.objects.get(email=email)
                if checkemail:
                    register_info = RegisteredUser.objects.filter(user_instance=checkemail)
                    register_info_token = register_info[0].token
                    if register_info_token == token:
                        RegisteredUser.objects.filter(user_instance=checkemail).update(status = True)
                        
                        context = {}
                        messages.success(request, 'You have confirmed Your account,Please login Here')
                        return HttpResponseRedirect('/login/')
                        
                    else:
                        messages.error(request, 'Invalid Token,please try again')
                        return HttpResponseRedirect('/login/')

                else:
                    print(sys.exc_info())
                    messages.error(request, "Invalid email address, please try again")
                    return HttpResponseRedirect('/login/')
            except:
                print(sys.exc_info())
                messages.error(request, "Invalid email address, please try again")
                return HttpResponseRedirect('/login/')
        except:
            print.error(sys.exc_info())
            messages.error(request, "Invalid email address or Token, please try again")
            return HttpResponseRedirect('/login/')



class LoginView(View):
    
    ''' User Will login by this View Based Function'''
    def post(self, request):
        context = {}
        try:
            id_card = self.request.POST.get('id_card').strip()
            print(id_card)
            password = self.request.POST.get('password').strip()
            print("password is --->", password)
            idCard = RegisteredUser.objects.filter(idCard = id_card).count()
            print("idCard is ------>",idCard)
            if idCard > 0:
                idCard_obj = RegisteredUser.objects.get(idCard = id_card)
                username = User.objects.get(username = id_card)
                user = authenticate(username = id_card, password = password)
                if user is not None:
                    if user.is_active == True:
                        if idCard_obj.status == True:
                            login(request, user)
                            return HttpResponseRedirect('/accounts/missing_person/')
                        else:
                            print(sys.exc_info())
                            context['msg'] =  'Sorry, You have not confirmed your account'
                            return render(request, 'user/login.html',context)

                    else :
                        context['msg'] =  'Sorry, Your Account is not Active'
                        return render(request, 'user/login.html',context)
                else:
                    context['msg'] =  'Incorrect Id or password, please try again'
                    return render(request, 'user/login.html',context)

                
            else:
                context['msg'] =  'Incorrect Id, please try again'
                return render(request, 'user/login.html',context)
        except:
            print(sys.exc_info())
            context['msg'] =  'Something Went Wrong,Please try again later'
            return render(request, 'user/login.html',context)

    def get(self,request):
        try:
            return render(request,'user/login.html', locals())
        except:
            print(sys.exc_info())
            return render(request,'user/login.html')



class ForgetView(View):

    ''' call a function when user will lost his password '''

    def post(self, request):
        context = {}
        try :
            site_url = get_current_site(request)
            site_url = str(site_url)
            email = request.POST.get('email').strip()
            check_exist = User.objects.filter(email = email)
            if check_exist :

                random_otp = ''.join(random.choice("1234567890") for _ in range(6))

                check_exist = check_exist[0]
                otp_time = datetime.datetime.now()
                otp_valid_time = datetime.datetime.now() + datetime.timedelta(minutes=15)
                register_user_instance = RegisteredUser.objects.get(user_instance = check_exist)
                register_user_instance.verify_code = random_otp
                register_user_instance.otp_time = otp_time
                register_user_instance.otp_valid_time = otp_valid_time
                register_user_instance.save()


                subject = "forgotten password"
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [email]
                random_otp = [random_otp]
                print("email is ----->", email_from)
                message = ''
                html_message = render_to_string('emails/forget.html',
                    {'user_info': check_exist,
                     'email': email, 'site_url': site_url, 'random_otp':random_otp})
                send_mail(subject,message,email_from,recipient_list,
                    html_message=html_message,fail_silently=False)
                context['msg_sucess'] = 'we will send you an email with instructions on how to reset your password'

                
            else:
                context['msg'] = 'No user account registered with provided information. Please check your details and try again'
            return render(request, 'user/forgot_password.html', context)

        except:
            print(sys.exc_info())
            context['msg'] = 'Something went wrong, Please try again later'
            return render(request, 'user/forgot_password.html',context)
    def get(self,request):
        try:
            return render(request,'user/forgot_password.html', locals())
        except:
            return render(request,'user/forgot_password.html')









class ResetPassword(View):
    ''' By this view based you can reset their password'''

    def get(self,request):
        try:
            email = request.GET.get('q')
            check_obj = User.objects.get(email = email)
            return render(request,'user/reset_password.html', locals())
        except:
            return render(request,'user/reset_password.html')

    def post(self,request):
        try:
            context = {}
            email = request.POST.get('reset_email')
            check_obj = User.objects.get(email = email)
            otp_obj = RegisteredUser.objects.filter(user_instance = check_obj)
            saved_otp = otp_obj[0].verify_code
            otp_valid_time = otp_obj[0].otp_valid_time
            otp_valid_time = dateparser.parse(otp_valid_time)
            otp_current_time = datetime.datetime.now()

            password = request.POST.get('password')
            entered_otp = request.POST.get('otp')
            if saved_otp == entered_otp:
                if otp_current_time <= otp_valid_time:
                    check_obj.set_password(password)
                    check_obj.save()
                    messages.success(request, 'Your password is Updated Successfully! Please Login Here')
                    return HttpResponseRedirect('/login/')
                else:
                    Client.objects.filter(user = check_obj).update(verify_code = '')
                    messages.error(request, 'Sorry your otp has expired, please try with new one')
            else:
                messages.error(request, 'Please check your entered verification code')



            context['email'] = email

            return render(request, 'user/reset_password.html',context)
        except:
            print(sys.exc_info())
            context['msg'] = 'Something went wrong, Please try again later'
        return render(request, 'user/reset_password.html',context)

    


class LogoutView(View):

    '''demonstarte docstring for confirm that this function is used for logout an user'''

    def get(self,request):
        try:
            logout(request)
            return HttpResponseRedirect('/login/')
        except:
            pass


