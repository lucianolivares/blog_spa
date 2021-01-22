from django.urls import path
from .views import PostList, PostDetail

app_name = 'blog'

urlpatterns = [
    path('<slug:slug>/', PostDetail.as_view(), name='detailcreate'),
    path('', PostList.as_view(), name='listcreate'),
]
