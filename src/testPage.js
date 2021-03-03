import React, {Component} from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { FaPlayCircle, FaListOl, FaStar } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Form from './Form'
import {settings} from './constants'


// list of skins

function testPage() {
    return (
        <div className="testBackground">
            <div className = "block">
                <Link to="/skins">
                    <FaPalette className="skins-button" />
                </Link>

                <Link to="/upgrades">
                    <FaStar className="upgrades-button" />
                </Link>
            </div>
        </div>
    );
}



export default testPage;