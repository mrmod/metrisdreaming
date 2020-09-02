import base64
import flask
import flask_cors
import requests

app = flask.Flask(__name__)
flask_cors.CORS(app)
@app.route('/', methods=['POST'])
def index():
    if not flask.request.json:
        return 'bad', 400
    try:
        url = base64.b64decode(flask.request.json['url']).decode('utf-8')

        print(f"URL: {url}")
    except:
        return 'uh-oh', 500
    
    r = requests.get(url)
    if r.status_code < 300:
        return r.text
    
    return 'bad upstream response', 404

def run():
    app.run(debug=True)

if __name__ == '__main__':
    run()