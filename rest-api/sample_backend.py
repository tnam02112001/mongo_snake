from flask import Flask
from flask import request
from flask import jsonify
import json
# for linking frontend-backend
from flask_cors import CORS

# for random ids 
# import random 
# import string

# for mongo db
from model_mongodb import Users

app = Flask(__name__)
# CORS stands for Cross Origin Requests.
# Here we'll allow requests coming from any domain. Not recommended for production environment.
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/leaderboard', methods=['GET', 'POST'])
def access_leaderboard():
    if request.method == 'GET':
        leaders = Users().get_leaders()
        return {"leaderboard": leaders}

def get_leaderboard():
         leaders = Users().get_leaders()
         return {"leaderboard": leaders}
