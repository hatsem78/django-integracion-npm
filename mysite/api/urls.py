# coding=utf-8
from django.conf.urls import url
from django.urls import include, path
from rest_framework import routers
from api.case.views import CaseAdd, CaseDetail, CaseList

router = routers.DefaultRouter()


urlpatterns = [
    url(r'^', include(router.urls)),
    #url('case/add/', CaseView.as_view(), name='case/add'),
    url(r'case/list', CaseAdd.as_view(), name='case/list'),
    #url(r'case/daily/<string>/$', CaseAdd.as_view(), name='case/daily'),
    path('case/daily/', CaseAdd.as_view()),
    url('case/add/', CaseAdd.as_view(), name='case/add'),
    path('case/<int:pk>/', CaseDetail.as_view()),
    path('case/<int:pk>/', CaseDetail.as_view()),
    #url('sumulator/add/', SimulatorView.as_view(), name='sumulator/add/'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]