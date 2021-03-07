"""A basic rest API that provides database access functionality
    to the leaderboard stored in MongoDB server
"""
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from model_mongodb import Users


app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def lookup_user():
    if request.method == 'GET':
        score = Users().get_highscore(request.args.get("name"))
        return {"highscore": score}, 200

@app.route('/leaderboard', methods=['GET', 'POST', 'DELETE'])
def access_leaderboard():
    """A function that handle database access request
    to the leaderboard stored in MongoDB server
    Returns:
        resp: a response HTML object including status code and body data
    """
    resp = jsonify({"error": "Invalid request"}), 400
    if request.method == 'GET':
        leaders = Users().get_leaderboard(10)
        resp = {"leaderboard": leaders}, 200
    if request.method == 'POST':
        user_to_add = request.get_json()
        if (user_to_add["name"] == "" or user_to_add["score"] < 0):
            resp = jsonify({"error": "Invalid data"}), 412
        else:
            new_user = Users(user_to_add)
            new_user.save()
            resp = jsonify(new_user), 201
    if request.method == 'DELETE':
        user_to_remove = request.get_json()
        user = Users({"_id": user_to_remove["_id"]})
        if user.remove() :
            resp = jsonify(success=True)
            resp.status_code = 200
    return resp
