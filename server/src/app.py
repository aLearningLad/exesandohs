from flask import Flask;

app = Flask(__name__)

@app.route('/score', methods=['GET'])
def printScore():
    print("Endpoint has been hit! This should appear in the terminal!")
    return 'endpoint hit!'