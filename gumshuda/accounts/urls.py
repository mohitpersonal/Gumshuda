from django.urls import path
from .views import *
from django.contrib.auth.decorators import login_required

urlpatterns = [
	
	#### dashboard function url 
	
	path('',login_required(MyEnteries.as_view()), name = 'MyEnteries'),
	path('missing_person/', login_required(MissingPersonView.as_view()), name = 'MissingPersonView'),
	
	path('found_person/', login_required(FoundPersonView.as_view()), name = 'FoundPersonView'),
	path('detect_person/', login_required(DetectPerson.as_view()), name = 'DetectPerson'),
	path('delete_found/', login_required(FoundPersonDelete.as_view()), name = 'FoundPersonDelete'),
	path('delete_missing/', login_required(MissingPersonDelete.as_view()), name = 'MissingPersonDelete'),
	path('view_found/', login_required(FoundView.as_view()), name = 'FoundView'),
	path('view_missing/', login_required(MissingViewSingle.as_view()), name = 'MissingViewSingle'),

	path('view_missing/', login_required(FoundResult.as_view()), name = 'FoundResult'),
	path('matched_records/', login_required(MatchedRecord.as_view()), name = 'MatchedRecord'),

	path('view_matched_record/', login_required(ViewMatchedRecordDetail.as_view()), name = 'ViewMatchedRecordDetail')



]