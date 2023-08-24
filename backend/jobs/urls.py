from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, BidViewSet


router = DefaultRouter()
router.register('jobs', JobViewSet)
router.register('bids', BidViewSet)

urlpatterns = [
    path('', include(router.urls)),
]