import base64
import flask
import flask_cors
import requests
import json


def get_algolia_results(url, request):
    r = requests.post(url, json=request)
    return r

def get_text_results(url):
    r = requests.get(url)
    return r

app = flask.Flask(__name__)
flask_cors.CORS(app)
@app.route('/', methods=['POST'])
def index():
    if not flask.request.json:
        return 'bad', 400

    # If it's DealerInspire / Algolia projects, get the JSON search results
    if 'product' in flask.request.json and flask.request.json['product'] == 'dealerInspire':
        r = get_algolia_results(
                flask.request.json['url'],
                flask.request.json['body'])
        if r.status_code < 300:
            return r.text
    
    # Otherwise, get the raw page for regex or scrape
    try:
        url = base64.b64decode(flask.request.json['url']).decode('utf-8')
        r = get_text_results(url)
        print(f"URL: {url}")
    except:
        return 'uh-oh', 500

    if r is not None and r.status_code < 300:
        return r.text
    elif r is not None:
        print(f"Status: {r.status_code} {r.text}")
    
    return 'bad upstream response', 404

def run():
    app.run(debug=True)

if __name__ == '__main__':
    run()