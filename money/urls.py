# @Author: ASHISH SASMAL <ashish>
# @Date:   03-09-2020
# @Last modified by:   ashish
# @Last modified time: 02-11-2020



from django.urls import path
from django.conf.urls import url
from . import views


urlpatterns = [
    path('',views.home,name='home'),
    path('addMoney/',views.Addmoney.as_view(),name='addmoney'),
    path('moneydetail/',views.Moneydetail.as_view(),name='moneydetail'),
    path('login/',views.Userlogin.as_view(),name="login"),
    path('logout/',views.user_logout,name='logout'),
    path('notes/',views.Notes.as_view(),name='notes'),
    path('getD/',views.GetData.as_view(),name='getd')
    # url(r'^password_reset/$', auth_views.password_reset, name='password_reset'),
    # url(r'^password_reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    # url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
    #     auth_views.password_reset_confirm, name='password_reset_confirm'),
    # url(r'^reset/done/$', auth_views.password_reset_complete, name='password_reset_complete'),
]
