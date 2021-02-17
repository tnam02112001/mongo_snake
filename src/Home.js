import React from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { FaPlayCircle, FaListOl, FaHourglassStart } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
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
                <div className="playContainer">
                    <Link to="/skins">
                        <FaPalette className="skins-button" />
                    </Link>

                    {/* <small>Play</small> <br /> */}
                    <Link to="/gameplay">
                        <FaPlayCircle className="gameplay-button" />
                    </Link>

                    <Link to="/upgrades">
                        <FaHourglassStart className="upgrades-button" />
                    </Link>
                    <form className="userInput">
                        <label for="Username" className="inputText"></label><br />
                        <input type="text" id="Username" name="Username" placeholder="Username" className="inputBox"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;