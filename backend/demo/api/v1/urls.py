
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ProfileViewSet,ProfileViewSet,ProfileViewSet,ProfileViewSet
router = DefaultRouter()
router.register('profile', ProfileViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
