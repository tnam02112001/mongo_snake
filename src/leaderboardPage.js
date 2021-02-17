import React, {Component} from 'react'
import './App.css';
import {FaArrowCircleLeft} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

const leadersBackup = [
    {rank: "1", name: "Nam", score: 31223},
    {rank: "2", name: "Michael", score: 29943},
    {rank: "3", name: "Edward", score: 27181},
    {rank: "4", name: "Brett", score: 19044},
    {rank: "5", name: "Disconnected", score: 19021},
]

const renderPlayer = (player, index) => {
    return (
        <tr key={index}>
            <td>{player.rank}</td>
            <td>{player.name}</td>
            <td>{player.score}</td>
        </tr>
    )
}

class leaderboardPage extends Component {
    state = {
        leaders: leadersBackup,
    }

    componentDidMount() {
        axios.get('http://localhost:5000/leaderboard')
            .then(res => {
                const leaders = res.data.leaderboard;
                this.setState({leaders});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {leaders} = this.state
        leaders.sort((a, b) => (a.rank > b.rank) ? 1 : -1) // sorts leaders by rank since database entries cannot be swapped

        return (
            <div className="leaderboard-div">
                <Link to="/">
                    <FaArrowCircleLeft className="home-button"/>
                </Link>
                <h1 className="mainTitle">Leaderboard</h1>
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
                        {leaders.map(renderPlayer)}
                        </tbody>
                    </ReactBootstrap.Table>
                </div>
            </div>
        );
    }
}

export default leaderboardPage;