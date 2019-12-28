from rest_framework.viewsets import ModelViewSet
from core.models import Avaliacao
from .serializers import AvaliacaoSerializer


class AvaliacaoViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Avaliacao.objects.all()
    serializer_class = AvaliacaoSerializer