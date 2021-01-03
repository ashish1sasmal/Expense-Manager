from datetime import datetime, timedelta
from django.conf import settings
from django.contrib import auth

class AutoLogout(object):
    def __init__(self, get_response):
        self.get_response = get_response
    def __call__(self, request):
        print("inside auto")
        print(request.user.is_authenticated)
        if not request.user.is_authenticated:
            return self.get_response(request)
        try:
            print(timedelta(0, settings.AUTO_LOGOUT_DELAY*60+19800, 0)+request.session.get_expiry_date())
            print(datetime.now())
            if datetime.now()>=timedelta(0, settings.AUTO_LOGOUT_DELAY*60, 0)+request.session.get_expiry_date():
                auth.logout(request)
                return self.get_response(request)
        except KeyError:
            pass
