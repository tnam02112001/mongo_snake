from flask import Flask
from flask import request
from flask import jsonify
import json
from flask_cors import CORS
from model_mongodb import Users

app = Flask(__name__)
CORS(app)

@app.route('/leaderboard', methods=['GET', 'POST', 'DELETE'])
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
    elif request.method == 'DELETE':
      userToRemove = request.get_json()
      user = Users({"_id": userToRemove["_id"]})
      if user.remove() :
         resp = jsonify(success=True)
         resp.status_code = 200
         # 200 is the default code for a normal response
         return resp
