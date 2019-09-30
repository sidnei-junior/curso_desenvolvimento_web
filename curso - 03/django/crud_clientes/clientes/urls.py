from django.urls import path
from .views import lista_de_clientes
urlpatterns = [
    path('', lista_de_clientes)
]
