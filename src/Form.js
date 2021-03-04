import React, {Component} from 'react'
import {FaPlayCircle, FaListOl, FaHourglassStart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {settings} from "./constants";

class Form extends Component {
    initialState = {
        name: settings["playerName"],
    }
    state = this.initialState
    handleChange = event => {

        this.setState({
            name: event.target.value
        })

    }
    submitForm = () => {
        if (this.state["name"] === "")
            this.state["name"] = "Player"
        settings["playerName"] = this.state["name"]
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const {name} = this.state;
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
                    className="inputBox"/>
                <big></big> <br/>
                <Link to="/gameplay">
                    <FaPlayCircle className="gameplay-button" onClick={this.submitForm}/>
                </Link>


            </form>
        );
    }
}
export default Form;
