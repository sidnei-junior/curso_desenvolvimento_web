from django.shortcuts import render
from django.http import HttpResponse
from .models import Produto
from .forms import ProdutoForm
# Create your views here.

def home(request):
    mensagem = "Mensagem da view"
    produtos = Produto.objects.all()
    return render(request, "itens/index.html", {"mensagem": mensagem, "produtos": produtos})

def produtos(request):
    return HttpResponse('<h1>Área de Produto</h1>')

def clientes(request):
    return HttpResponse('<h1>Área de Cliente</h1>')

def create_produto(request):
    form = ProdutoForm(request.POST)
    if form.is_valid():
        obj = form.save()
        obj.save() #salva as informações do formulário
        form = ProdutoForm()
    return render(request, "itens/create_produto.html", {'form': form})