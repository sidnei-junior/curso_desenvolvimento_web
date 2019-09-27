from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    mensagem = "Mensagem da view"
    return render(request, "itens/index.html", {"mensagem": mensagem})

def produtos(request):
    return HttpResponse('<h1>Área de Produto</h1>')

def clientes(request):
    return HttpResponse('<h1>Área de Cliente</h1>')