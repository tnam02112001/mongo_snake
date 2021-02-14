import React from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="homePage" style={{backgroundColor: '#8FF4F4', width : '1280px', height : '720px', position: 'absolute', top: '0px'}}>
            <h3 style = {{textAlign: 'center'}}>MongoSnake</h3>
            {/* <small style = {{display: 'flex', textAlign: 'center'}}>Skins</small> <br /> */}
            
            <Link to="/skins" 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}
            >
                <FaPalette className="skins-button" />
            </Link>

            <small></small> <br />
            {/* <small>Play</small> <br /> */}
            <Link to="/gameplay"
             style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}
            >
                <FaPlayCircle className="skins-button" />
            </Link>
            
            <small></small> <br />
            {/* <small>Settings</small> <br /> */}
            <Link to="/settings"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}>
                <FaCog className="skins-button" />
            </Link>
        </div>
    );
}

export default Home;