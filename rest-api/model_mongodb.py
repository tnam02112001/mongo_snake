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
        self.collection.insert(self)
        self._id = str(self._id)

    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp


class Users(Model):
    db_client = pymongo.MongoClient("mongodb+srv://user:USFkJD4WhXjKdYOE@cluster0.tzqe4.mongodb.net/")
    collection = db_client["users"]["leaderboard"]  # db name is 'users' and collection name is 'leaderboard'

    def get_leaderboard(self, n): # pass n as zero for no limit
        leaders = list(self.collection.find().sort("score", pymongo.DESCENDING).limit(n))
        for leader in leaders:
            leader["_id"] = str(leader["_id"])
        return leaders

    