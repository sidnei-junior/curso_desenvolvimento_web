from django.shortcuts import render
from .models import Cliente
from .forms import ClienteForm
# Create your views here.

def lista_de_clientes(request):
   clientes = Cliente.objects.all()
   return render(request, "clientes/lista_de_clientes.html",{'clientes': clientes})

def adicionar_cliente(request):
   form = ClienteForm(request.POST)
   if form.is_valid():
      obj = form.save
      obj.save()
   else:
      form = ClienteForm()

   return render(request, "clientes/adicionar_clientes.html", {'form':form})