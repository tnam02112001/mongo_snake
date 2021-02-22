import pytest
import sample_backend

def test_get_topplayer():  
  expected = {
      "_id": "602cf1530fee0fa57f2ef5f7", 
      "name": "Nam", 
      "rank": "1", 
      "score": 31223.0
    }
  assert sample_backend.get_topplayer() == expected

def test_get_leaderboardwithlimit():
  expected = {
    "leaderboard": [
    {
      "_id": "602cf1530fee0fa57f2ef5f7", 
      "name": "Nam", 
      "rank": "1", 
      "score": 31223.0
    }, 
    {
      "_id": "602ce6890fee0fa57f2ef5f6", 
      "name": "Michael", 
      "rank": "2", 
      "score": 29943.0
    }, 
]
  }
  assert sample_backend.get_leaderboardwithlimit(2) == expected

def test_get_leaderboardwithlimit4():
  expected = {
  "leaderboard": [
    {
      "_id": "602cf1530fee0fa57f2ef5f7", 
      "name": "Nam", 
      "rank": "1", 
      "score": 31223.0
    }, 
    {
      "_id": "602ce6890fee0fa57f2ef5f6", 
      "name": "Michael", 
      "rank": "2", 
      "score": 29943.0
    }, 
    {
      "_id": "602d118a6fc98b2990e2b682", 
      "name": "Edward", 
      "rank": "3", 
      "score": 27181
    }, 
    {
      "_id": "602d11996fc98b2990e2b683", 
      "name": "Brett", 
      "rank": "4", 
      "score": 19044
    }, 
]
  }
  assert sample_backend.get_leaderboardwithlimit(4) == expected
    




