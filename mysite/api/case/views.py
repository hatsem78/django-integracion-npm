from abc import ABC

from django.db.models import Sum, Count, Func, IntegerField, Avg, CharField
from django.db.models.functions import TruncMonth, TruncDate
from django.utils.datetime_safe import datetime
from rest_framework.authentication import (
    TokenAuthentication,
    SessionAuthentication,
    BasicAuthentication,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from api.case.serializers import CaseSerializer
from polls_angular.models import FormGroup
from polls_angular.models import GENDER, STATUSLIST

from api.case.serializers import CasePagSerializer

from api.utils import Pagination


class CaseList(generics.ListAPIView):
    queryset = FormGroup.objects.get_queryset().order_by('id')
    serializer_class = CasePagSerializer
    pagination_class = Pagination


class Month(Func, ABC):
    function = 'EXTRACT'
    template = '%(function)s(MONTH from %(expressions)s)'
    output_field = IntegerField()


class CaseAdd(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):

        filter = self.request.GET.get('filter', None)
        snippets = None

        if filter != None:
            filter = self.__option_tuple(filter, STATUSLIST)
            snippets = FormGroup.objects.filter(
                status__startswith=filter
            ).annotate(dates=TruncDate('date')) \
            .values('dates') \
            .annotate(count=Count('id'), total=Sum('id'))

            return Response(snippets)
        else:
            snippets = FormGroup.objects.all()

        serializer = CasePagSerializer(snippets, many=True)

        return Response(serializer.data)

    def post(self, request, format=None):

        request.data['gender'] = self.__option_tuple(request.data['gender'], GENDER)
        request.data['status'] = self.__option_tuple(request.data['status'], STATUSLIST)

        serializer = CaseSerializer(data=request.data)

        try:
            if serializer.is_valid():
                serializer.save()
                serializer.initial_data['id'] = serializer.instance.id
                return Response(serializer.initial_data, status=status.HTTP_201_CREATED)
        except Exception as error:
            errors = error.args[0]
            return Response({'error': errors}, content_type="application/json")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def __option_tuple(self, item, choice):

        result = ''

        for option_key, option_value in choice:
            if item == option_value:
               result = option_key

        return result


class CaseDetail(APIView):
    """Remove simulador"""
    '''authentication_classes = [
        SessionAuthentication,
        BasicAuthentication,
        TokenAuthentication,
    ]
    permission_classes = (IsAuthenticated,)'''

    def get_object(self, pk):
        try:
            object = FormGroup.objects.get(pk=pk)
            return object
        except FormGroup.DoesNotExist:
            from django.http import Http404

            raise Http404

    def get(self, request, pk=None, format=None):

        if pk:

            form_grup_obj = self.get_object(pk)

            form_grup = CaseSerializer(form_grup_obj)

            result = form_grup.data
            result['gender'] = form_grup_obj.get_gender_display()
            result['status'] = form_grup_obj.get_status_display()

        return Response(result)

    def put(self, request, pk, format=None):
        object = self.get_object(pk)

        serializer = CaseSerializer(object, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("save")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        try:
            status = 0
            simulador = self.get_object(pk=pk)
            status =  simulador.delete()
        except ValueError as error:
            print('error')

        return Response(status)

    def __option_tuple(self, item, choice):

        result = ''

        for option_key, option_value in choice:
            if item == option_value:
               result = option_key

        return result
