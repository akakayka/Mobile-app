

import requests

print(requests.get('http://127.0.0.1:8000/login?username=1111&password=2222').text)