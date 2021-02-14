import React, { Component } from 'react';
import ImageSlider from './components/ImageSlider';
import { Difficulties } from './components/Difficulties';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {settings} from './constants'



// list of difficulty
const list = [
    { name: 'easy' },
    { name: 'medium' },
    { name: 'hard'},
  ];
  
  // One item component
  // selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };
  
  // All items component
  // Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
    const {name} = el;
    return <MenuItem text={name} key={name} selected={selected} />;
    });
  
  
  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };
  
  
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = settings['difficulty'];
class settingsPage extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
      }

      state = {
        selected
      };
      onSelect = key => {
        this.setState({ selected: key });
        settings['difficulty'] = key;
      }
      render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;
    
    return (
        <div style={{backgroundColor: '#8FF4F4', width : '1280px', height : '720px', position: 'absolute', top: '0px'}}>
            <Link to="/">
                <FaArrowCircleLeft className="home-button" />
            </Link>
            <h3 className='title'>Choose your difficulty</h3>
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px"
                }}
            >
                <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={this.onSelect}
        /></div>
        </div>
    );
}
}

export default settingsPage;