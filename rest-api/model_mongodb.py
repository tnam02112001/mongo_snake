"""
A basic MongoDB model that provides database access functionality
to the leaderboard stored in MongoDB server
"""
import pymongo
from bson import ObjectId

class Model(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        """
        A function handling POST request that saves
        a player to the leaderboard database
        """
        self.collection.insert(self)
        self._id = str(self._id)

    def remove(self):
        """
        A function handling DELETE request that delete
        a player to the leaderboard database
        """
        resp = self.collection.remove({"_id": ObjectId(self._id)})
        self.clear()
        return resp


class Users(Model):
    """
    Class Users provide functions to access the leaderboard
    """
    db_client = pymongo.MongoClient("mongodb+srv://user:USFkJD4WhXjKdYOE@cluster0.tzqe4.mongodb.net/")
    collection = db_client["users"]["leaderboard"]

    def get_leaderboard(self, num_limit):
        """
        A function that returns a leaderboard in the database

        Args:
            num_limit (int): The maximum number of entries returned. 0 for no limit
        Returns:
            (list): A list of [num_limit] JSON entries sorted by descending score
        """
        leaders = list(self.collection.find().sort("score", pymongo.DESCENDING).limit(num_limit))
        for leader in leaders:
            leader["_id"] = str(leader["_id"])
        return leaders
