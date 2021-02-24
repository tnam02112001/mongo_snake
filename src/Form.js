import React, {Component} from 'react'
import { FaPlayCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Form extends Component {
   initialState = {
     name: "Player",
   }
 
   state = this.initialState
   handleChange = event => {
  
    this.setState({
      name: event.target.value
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name } = this.state;
    return (
      <form className = "userInput">
        <label htmlFor="Name" className="inputText"></label>
        <input
          type="text"
          name="Name"
          id="Name"
          value={name}
          onChange={this.handleChange} 
          placeholder = "Name"
          className = "inputBox"/> 
          <big></big> <br />
          <Link to="/gameplay">
               <FaPlayCircle className="gameplay-button" onClick = {this.submitForm} />
         </Link>  
      </form>
    );
  }
 }
export default Form;