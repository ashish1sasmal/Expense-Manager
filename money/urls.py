from django.urls import path

from . import views


urlpatterns = [
    path('',views.home,name='home'),
    path('addMoney/',views.Addmoney.as_view(),name='addmoney'),
    path('moneydetail/',views.Moneydetail.as_view(),name='moneydetail'),
    path('login/',views.Userlogin.as_view(),name="login"),
]
