from flask import Flask,request
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

@app.route('/api/login', methods=['POST'])
def weather():
    data=request.json
    print(data['city'])
    api='100e4dd5a595c14cba4f4e6b21c589b4'
    h="http://api.openweathermap.org/data/2.5/weather?" + "appid=" + api + "&q=" + data['city']
    response = requests.get(h)
    x = response.json()
    z = x["weather"]
    return z[0]

app.run(debug=True)