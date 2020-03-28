from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _

from polls_angular.models import FormGroup
from polls_angular.models import GENDER, STATUSLIST


class CaseSerializer(serializers.ModelSerializer):
    """Serializer for the users object"""

    class Meta:
        model = FormGroup
        fields = (
            "id",
            "name",
            "gender",
            "age",
            "address",
            "city",
            "country",
            "status",
        )

        id_provincia = serializers.IntegerField()
        name = serializers.CharField(required=True, allow_blank=False, max_length=100)
        gender = serializers.ChoiceField(choices=GENDER)
        age = serializers.CharField(required=True, allow_blank=False, max_length=10)
        address = serializers.CharField(max_length=200)
        city = serializers.CharField(max_length=200)
        country = serializers.CharField(max_length=200)
        status = serializers.ChoiceField(choices=STATUSLIST)

    def create(self, validated_data):
        """
            Create and return a new `Alumno` instance, given the validated data.
        """
        trans = []

        trans = FormGroup.objects.create(**validated_data)

        return trans


class CasePagSerializer(serializers.Serializer):

    class Meta:
        model = FormGroup
        fields = ('id', 'name', 'gender', 'age', 'address', 'city', 'country', 'status', 'get_gender_display', 'get_status_display')

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True, allow_blank=False, max_length=100)
    gender = serializers.CharField(max_length=2)
    age = serializers.IntegerField()
    address = serializers.CharField(max_length=200)
    city = serializers.CharField(max_length=200, allow_blank=True)
    country = serializers.CharField(max_length=200, allow_blank=True)
    status = serializers.CharField(max_length=2)
    get_gender_display = serializers.CharField(max_length=50)
    get_status_display = serializers.CharField(max_length=50)


'''

class PromocionPagSerializer(serializers.Serializer):
    class Meta:
        model = Promocion
        fields = fields = (
            'id',
            'nombre',
            'porcentaje',
            'fecha_expiracion',
            'expiracion', 'activo', 'description'
        )

    id = serializers.IntegerField(read_only=True)
    nombre = serializers.CharField(required=True, allow_blank=False, max_length=100)
    fecha_expiracion = serializers.DateTimeField(allow_null=True, default='0000-00-00')
    porcentaje = serializers.CharField(required=True, allow_blank=False, max_length=3)
    expiracion = serializers.BooleanField(False)
    activo = serializers.BooleanField(True)
    description = serializers.CharField(max_length=500, allow_blank=True)

'''