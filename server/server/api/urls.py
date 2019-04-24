from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from api import views


router = DefaultRouter()
router.register(r'api', views.TextViewSet)



urlpatterns = router.urls