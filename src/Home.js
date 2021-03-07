import React, {Component} from 'react';
import './App.css';
import { FaPalette } from 'react-icons/fa';
import { FaListOl, FaStar } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Form from './Form'
import {settings} from './constants'
import { motion } from 'framer-motion';


const pageVariants = {
    in: {
      opacity: 1,
      y:0
    },
    out: {
      opacity: 0,
    }
  };

class Home extends Component {
    handleSubmit = name =>{
        settings['playerName'] = name["name"]
    };

    render(){
        return (
        <div className="homePage">

            <motion.div initial="out" animate="in" exit="out" variants={pageVariants}>

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
            </motion.div>
        </div>
    );
    }
}

export default Home;