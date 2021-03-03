"""
Unit Tests for the functionality of the Backend Model
"""
from sample_backend import app

def test_get_leaderboard():
    """
    Test the functionality of the GET request
    """
    resp = app.test_client().get('/leaderboard')
    expected = [
      {"_id":"6038bd1d8c8f5ed5662b2032",
      "name":"longboi",
      "score":1080
      },

      {"_id":"6039800ba74067aad828ed08",
      "name":"eddy",
      "score":405
      }  
    ]

    assert resp.status_code == 200
    assert expected == resp.get_json()["leaderboard"][:2]

def test_post_delete_leaderboard():
    """
    Test the functionality of the POST and DELETE request
    """

    #Test POST request
    data = {
      "name": "UnitTest",
      "score": 0
    }
    resp = app.test_client().post('/leaderboard', json = data)
    return_data = resp.get_json()
    assert resp.status_code == 201
    assert return_data["name"] == data["name"]
    assert return_data["score"] == data["score"]

    #Test DELETE request, DELETE a newly-created data to preserve the old content of the database
    resp = app.test_client().delete('/leaderboard', json = return_data)
    assert resp.status_code == 200
    
