from django.contrib import admin
from django.urls import path, include
from . import views



urlpatterns = [
    path("", views.index, name="index"),
    path("tracks", views.tracks, name="track"),
    path("about", views.about, name="about"),
]