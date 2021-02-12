import React from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="homePage">
            <h3>MongoSnake</h3>
            <small>Skins</small> <br />
            <Link to="/skins">
                <FaPalette className="skins-button" />
            </Link>
            <small></small> <br />
            <small>Play</small> <br />
            <Link to="/play">
                <FaPlayCircle className="skins-button" />
            </Link>
            <small></small> <br />
            <small>Settings</small> <br />
            <Link to="/settings">
                <FaCog className="skins-button" />
            </Link>
        </div>
    );
}

export default Home;