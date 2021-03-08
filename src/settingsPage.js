import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import "./App.css";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { settings } from "./constants";
import { motion } from "framer-motion";

// list of difficulty
const list = [{ name: "easy" }, { name: "medium" }, { name: "hard" }];

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = settings["difficulty"];

const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};
class settingsPage extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected,
  };
  onSelect = (key) => {
    this.setState({ selected: key });
    settings["difficulty"] = key;
  };
  render() {
    const menu = this.menuItems;

    return (
      <div className="page-div">
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <Link to="/">
            <FaArrowCircleLeft className="home-button" />
          </Link>
          <h1 className="mainTitle">Choose your difficulty</h1>
          <div className="scrollMenu">
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={settings["difficulty"]}
              onSelect={this.onSelect}
            />
          </div>
        </motion.div>
      </div>
    );
  }
}

export default settingsPage;
