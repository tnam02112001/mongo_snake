import React, { Component } from "react";
import { FaPlayCircle, FaListOl, FaHourglassStart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LEVEL_CONSTANTS, settings } from "./constants";
import axios from "axios";

class Form extends Component {
  initialState = {
    name: settings["playerName"],
  };
  state = this.initialState;
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  calculatePlayerLevel = (highscore) => {
    if (highscore >= LEVEL_CONSTANTS[2]) {
      settings["level"] = 2;
    } else if (highscore >= LEVEL_CONSTANTS[1]) {
      settings["level"] = 1;
    } else {
      settings["level"] = 0;
    }
  };
  submitForm = () => {
    if (this.state["name"] === "") this.state["name"] = "Player";
    settings["playerName"] = this.state["name"];
    axios
      .get("http://localhost:5000/", {
        params: { name: settings["playerName"] },
      })
      .then((res) => {
        this.calculatePlayerLevel(res.data.highscore);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { name } = this.state;
    return (
      <form className="userInput">
        <label htmlFor="Name" className="inputText"></label>
        <input
          type="text"
          name="Name"
          id="Name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          className="inputBox"
        />
        <big></big> <br />
        <Link to="/gameplay">
          <FaPlayCircle className="gameplay-button" onClick={this.submitForm} />
        </Link>
      </form>
    );
  }
}
export default Form;
