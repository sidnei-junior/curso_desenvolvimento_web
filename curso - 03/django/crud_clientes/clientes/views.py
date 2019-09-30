from django.shortcuts import render
from .models import Cliente
# Create your views here.

def lista_de_clientes(request):
   clientes = Cliente.objects.all()
   return render(request, "clientes/lista_de_clientes.html",{'clientes': clientes})
