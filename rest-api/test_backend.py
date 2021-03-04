"""
Unit Tests for the functionality of the Backend Model
"""
from sample_backend import app

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

def test_post_get_delete_leaderboard():
    """
    Test the functionality of the POST, GET and DELETE request
    """

    # Initial test data to POST
    data1 = {
      "name": "Player1",
      "score": 1000000000
    }
    data2 = {
      "name": "Player2",
      "score": 34325200
    }
    data3 = {
      "name": "Player3",
      "score": 7582423000000
    }

    #Test POST request
    resp = app.test_client().post('/leaderboard', json = data1)
    assert resp.status_code == 201
    return_data1 = resp.get_json()

    resp = app.test_client().post('/leaderboard', json = data2)
    assert resp.status_code == 201
    return_data2 = resp.get_json()

    resp = app.test_client().post('/leaderboard', json = data3)
    assert resp.status_code == 201
    return_data3 = resp.get_json()

    #Test GET request
    expected = [return_data3, return_data1, return_data2]
    resp = app.test_client().get('/leaderboard')
    assert resp.status_code == 200
    assert resp.get_json()["leaderboard"][:3] == expected

    #Test DELETE request
    resp = app.test_client().delete('/leaderboard', json = return_data1)
    assert resp.status_code == 200
    resp = app.test_client().delete('/leaderboard', json = return_data2)
    assert resp.status_code == 200
    resp = app.test_client().delete('/leaderboard', json = return_data3)
    assert resp.status_code == 200
