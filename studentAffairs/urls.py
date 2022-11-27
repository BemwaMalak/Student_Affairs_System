"""studentAffairs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from website import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('home', views.home),
    path('add',views.addStudent ),
    path('search',views.search, name="search"),
    path('search/getall', views.getSearchResult),
    path('edit/<int:id>', views.edit , name="edit"),
    path('remove/<int:id>', views.remove),
    path('select/<int:id>', views.select),
    path('deactivate/<int:id>', views.deactivate),
    path('show', views.show),
    path('show/getall', views.getAllStudents),
    path('about', views.about),
    path('editCheck/<int:newID>/<int:oldID>', views.checkForEdit),
    path('addCheck/<int:id>', views.checkForAdd),
    
]
