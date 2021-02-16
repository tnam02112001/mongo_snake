import React from 'react';
import './App.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function upgradesPage() {
    return (
      <div className="upgrades-div">
        <Link to="/">
            <FaArrowCircleLeft className="home-button" />
        </Link>
        <h1 className="mainTitle">Upgrades</h1>
      </div>
    );
  }
  
  export default upgradesPage;