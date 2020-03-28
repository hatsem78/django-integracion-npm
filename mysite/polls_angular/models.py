from django.db import models

GENDER = (
    ('M', 'Male'),
    ('H', 'Female'),
)

STATUSLIST = (
    ('P', 'Positive'),
    ('D', 'Dead'),
    ('R', 'Recovered')
)


class FormGroup(models.Model):
    name = models.CharField(max_length=200)
    gender = models.CharField(max_length=1, choices=GENDER, null=False, db_index=True)
    age = models.CharField(max_length=10)
    address = models.CharField(max_length=200, blank=True, null=True)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    status = models.CharField(max_length=1, choices=STATUSLIST, null=False, db_index=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

