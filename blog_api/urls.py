from django.urls import path
from .views import PostList
from rest_framework.routers import DefaultRouter

app_name = 'blog'

router = DefaultRouter()
router.register('', PostList, basename='post')
urlpatterns = router.urls
