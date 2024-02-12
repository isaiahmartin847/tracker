from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import *


# Create your views here.
def index(request):
    return render(request, "/home/isaiah/coding_projects/tracker/tracker/tracks/templates/index.html")


def tracks(request):
    return render(request, "/home/isaiah/coding_projects/tracker/tracker/tracks/templates/tracks.html")

def about(request):
    return render(request, "/home/isaiah/coding_projects/tracker/tracker/tracks/templates/about.html")