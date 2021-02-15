import './App.css';
import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { FaArrowCircleLeft } from 'react-icons/fa';

const App = () => {
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
    <div className="App">
      <FaArrowCircleLeft className="home-button" />
      <h1 className="mainText">Leaderboard</h1>
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

export default App;
