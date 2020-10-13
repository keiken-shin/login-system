from django.urls import path
from .views import SignupView, UsercheckView

urlpatterns = [
    path('signup/', SignupView.as_view()),
    path('usertype/', UsercheckView.as_view()),
]