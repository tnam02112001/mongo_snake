import React, {Component} from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { FaPlayCircle, FaListOl, FaStar } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Form from './Form'
import {settings} from './constants'


class Home extends Component {
    handleSubmit = name =>{
        settings['playerName'] = name["name"]
    };

    render(){
        return (
        <div className="homePage">
            {/* style={{backgroundColor: '#8FF4F4', width : '100vh', height : '720px', position: 'absolute', top: '0px'}} */}
            {/* <small style = {{display: 'flex', textAlign: 'center'}}>Skins</small> <br /> */}
            <div className="button-container">
                <h3 className="homeTitle">MongoSnake</h3>
                
                <small></small> <br />
                {/* <small>Settings</small> <br /> */}
                <Link to="/settings">
                    <FaCog className="settings-button" />
                </Link>
                <small></small><br />
                <Link to="/leaderboard">
                    <FaListOl className="leaderboard-button" />
                </Link>
                <div className="movingGradient">
                    <div className="playContainer">
                        <Link to="/skins">
                            <FaPalette className="skins-button" />
                        </Link>

                        {/* The form already included the gameplay button */}
                        {/* <Link to="/gameplay">
                            <FaPlayCircle className="gameplay-button" />
                        </Link> */}

                        <Link to="/upgrades">
                            <FaStar className="upgrades-button" />
                        </Link>

                        <Form handleSubmit = {this.handleSubmit}/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
    

export default Home;