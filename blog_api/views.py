from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAuthenticated
from rest_framework import viewsets
from rest_framework import filters
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


class PostUserWithPermission(BasePermission):
    message = 'Editing posts is retricted to the author only.'

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in SAFE_METHODS:
            return True

        # Instance must have an attribute named `owner`.
        return obj.author == request.user


class PostList(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, slug=item)

    # Define Custom Queryset
    def get_queryset(self):
        return Post.objects.all()

# class PostList(generics.ListCreateAPIView):
#     permission_classes = [IsAuthenticatedOrReadOnly]
#     queryset = Post.post_by_date.all()
#     serializer_class = PostSerializer


# class PostDetail(generics.RetrieveUpdateDestroyAPIView):
#     #lookup_field = "slug"
#     permission_classes = [PostUserWithPermission]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer


""" Concrete View Classes
#CreateAPIView
Used for create-only endpoints.
#ListAPIView
Used for read-only endpoints to represent a collection of model instances.
#RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
#DestroyAPIView
Used for delete-only endpoints for a single model instance.
#UpdateAPIView
Used for update-only endpoints for a single model instance.
##ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
#RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
#RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""
