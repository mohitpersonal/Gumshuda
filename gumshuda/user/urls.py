from django.urls import path
from .views import *

urlpatterns = [
    path('', RegisterView.as_view(), name 
    	 ='RegisterView'),
    path('email_check/', ConfirmationView.as_view() ,name = 'ConfirmationView'),
    path('login/', LoginView.as_view(), name = 'LoginView'),
    path('forget_password/', ForgetView.as_view(), name = 'ForgetView'),
    path('reset-password/', ResetPassword.as_view(), name = 'ResetPassword'),
    path('logout/', LogoutView.as_view(), name = 'LogoutView')

]