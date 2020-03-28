#! -.- coding: utf-8 -.-
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.shortcuts import redirect


from django.contrib.auth import authenticate, login
from django.utils.decorators import method_decorator
from django.views import View
from django.contrib.auth import logout as do_logout
from django.views.generic import TemplateView

@login_required
def index(request):

    return render(
        request,
        'index.html',
    )

class Index(LoginRequiredMixin, TemplateView):
    template_name = "blank.html"

    def get_context_data(self, *args, **kwargs):
       pass

    def get(self, request, *args, **kwargs):
        return render(request, 'index.html',)

def logout(request):
    # Finalizamos la sesión
    do_logout(request)
    # Redireccionamos a la portada
    return redirect('/')


class Calculator(LoginRequiredMixin, TemplateView):
    template_name = "blank.html"

    def get_context_data(self, *args, **kwargs):
        pass

    def get(self, request, *args, **kwargs):
        return render(request, 'calculator.html',)


class CoronaVirus(LoginRequiredMixin, TemplateView):
    template_name = "blank.html"

    def get_context_data(self, *args, **kwargs):
        pass

    def get(self, request, *args, **kwargs):
        return render(request, 'coronavirus.html', )
