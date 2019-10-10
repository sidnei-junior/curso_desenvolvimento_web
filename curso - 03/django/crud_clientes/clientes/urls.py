from django.urls import path
from .views import lista_de_clientes, adicionar_cliente
urlpatterns = [
    path('', lista_de_clientes),
    path('adicionar_cliente/',adicionar_cliente)
]
