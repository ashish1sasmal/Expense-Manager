from django.core.serializers import serialize
import json
from django.http import HttpResponse

class SerializeMixin(object):
    def serialize(self,qs):
        json_data = serialize('json',qs)
        dict_data = json.loads(json_data)
        final_list =[]
        for i in dict_data:
            final_list.append(i['fields'])
        json_data = json.dumps(final_list)
        return json_data
