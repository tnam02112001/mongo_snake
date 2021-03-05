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
      {
        "_id": "602cf1530fee0fa57f2ef5f7",
        "name": "Nam",
        "score": 31223.0
      },
      {
        "_id": "602ce6890fee0fa57f2ef5f6",
        "name": "Michael",
        "score": 29943.0
      },
      {
        "_id": "602d118a6fc98b2990e2b682",
        "name": "Edward",
        "score": 27181
      },
      {
        "_id": "602d11996fc98b2990e2b683",
        "name": "Brett",
        "score": 19044
      },
    ]

    assert resp.status_code == 200
    assert expected == resp.get_json()["leaderboard"][:4]

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
