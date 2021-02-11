import React from 'react';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './App.css';

function skinsPage() {
    return (
        <div classname="skinsDiv" style={{backgroundColor: '#8FF4F4'}}>
            <Link to="/">
                <FaArrowCircleLeft className="home-button" />
            </Link>
            <h3 className='skins-title'>Choose your color</h3>    
            <ImageSlider slides={SliderData} />
        </div>
    );
}

export default skinsPage;