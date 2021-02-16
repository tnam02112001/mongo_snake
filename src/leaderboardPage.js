import React from 'react';
import './App.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

function leaderboardPage() {
    const players = [
      {rank: "1", name: "Nam", score: 31223},
      {rank: "2", name: "Michael", score: 29943},
      {rank: "3", name: "Edward", score: 27181},
      {rank: "4", name: "Brett", score: 19044},
      {rank: "5", name: "Will", score: 19021},
    ]
  
    const renderPlayer = (player, index) => {
      return(
        <tr key={index}>
          <td>{player.rank}</td>
          <td>{player.name}</td>
          <td>{player.score}</td>
        </tr>
      )
    }
    return (
      <div className="leaderboard-div">
        <Link to="/">
            <FaArrowCircleLeft className="home-button" />
        </Link>
        <h1 className="mainText-leaderboard">Leaderboard</h1>
        <div className="tableContainer">
          <ReactBootstrap.Table striped hover className="tablecss">
            <thead>
              <tr className="colNames">
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody className="dataText">
              {players.map(renderPlayer)}
            </tbody>
          </ReactBootstrap.Table>
        </div>
      </div>
    );
  }
  
  export default leaderboardPage;