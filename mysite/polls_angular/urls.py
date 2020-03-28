from django.urls import path

from . import views

urlpatterns = [
    path('calculator', views.Calculator.as_view(), name='calculator'),
    path('coronavirus', views.CoronaVirus.as_view(), name='coronavirus'),


]