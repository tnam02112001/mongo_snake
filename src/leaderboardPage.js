import React, { Component } from "react";
import "./App.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";

const renderPlayer = (player, index) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

class leaderboardPage extends Component {
  state = {
    leaders: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/leaderboard")
      .then((res) => {
        const leaders = res.data.leaderboard;
        this.setState({ leaders });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { leaders } = this.state;
    return (
      <div className="page-div">
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <Link to="/">
            <FaArrowCircleLeft className="home-button" />
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
              <tbody className="dataText">{leaders.map(renderPlayer)}</tbody>
            </ReactBootstrap.Table>
          </div>
        </motion.div>
      </div>
    );
  }
}

export default leaderboardPage;
