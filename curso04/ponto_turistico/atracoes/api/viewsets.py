from rest_framework.viewsets import ModelViewSet
from atracoes.models import Atracao
from .serializers import AtracaoSerializer
from django_filters.rest_framework import DjangoFilterBackend


class AtracaoViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Atracao.objects.all()
    serializer_class = AtracaoSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('nome', 'descricao')