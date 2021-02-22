from flask import Flask
from flask import request
from flask import jsonify
import json

from flask_cors import CORS
from model_mongodb import Users

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/leaderboard', methods=['GET', 'POST'])
def access_leaderboard():
    if request.method == 'GET':
        leaders = Users().get_leaderboard(10)
        return {"leaderboard": leaders}
    elif request.method == 'POST':
      userToAdd = request.get_json()
      newUser = Users(userToAdd)
      newUser.save()
      resp = jsonify(newUser), 201
      return resp
