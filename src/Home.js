import React from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="homePage">
            <h3>Welcome to the home page</h3>
            <small>Page 1</small> <br />
            <Link to="/skins">
                <FaPalette className="skins-button" />
            </Link>
        </div>
    );
}

export default Home;