import React from 'react';
import ImageSlider from './components/ImageSlider';
import { Difficulties } from './components/Difficulties';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './App.css';

function settingsPage() {
    return (
        <div style={{backgroundColor: '#8FF4F4'}}>
            <Link to="/">
                <FaArrowCircleLeft className="home-button" />
            </Link>
            <h3 className='title'>Choose your difficulty</h3>
            <ImageSlider slides={Difficulties} />
        </div>
    );
}

export default settingsPage;