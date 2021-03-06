import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useInterval } from "./useInterval";
import "./App.css";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  CANVAS_SIZE,
  SNAKE_START,
  SCALE,
  DIRECTIONS,
  APPLE_START,
  SPEED_CONSTANTS,
  TONGUE_CONSTANTS,
  LEVEL_CONSTANTS,
  settings,
} from "./constants";

const pageVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
  },
};

const pageTransitions = {
  duration: 0.75,
};
const Gameplay = () => {
  const canvasRef = useRef();
  const gameSpeed = SPEED_CONSTANTS[settings["difficulty"]];
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setScore(0);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(gameSpeed);
    setGameOver(false);
  };

  const writeLeaderboard = () => {
    var playerToAdd = {
      name: settings.playerName,
      score: score,
    };
    return axios
      .post("http://localhost:5000/leaderboard", playerToAdd)
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  };
  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
    writeLeaderboard();
    let newLevel = -1;
    if (score >= LEVEL_CONSTANTS[2]) {
      // updates player level based on most recent score
      newLevel = 2;
    } else if (score >= LEVEL_CONSTANTS[1]) {
      newLevel = 1;
    } else {
      newLevel = 0;
    }
    if (newLevel > settings["level"]) settings["level"] = newLevel;
  };
  const moveSnake = ({ keyCode }) => {
    if (keyCode == 13) startGame();
    if (gameOver || keyCode < 37 || keyCode > 40) return;
    gameLoop();
    const newDir = DIRECTIONS[keyCode];
    if (
      Math.abs(newDir[0]) == Math.abs(dir[0]) ||
      Math.abs(newDir[1]) == Math.abs(dir[1])
    )
      return;
    setDir(newDir);
  };
  const createApple = () =>
    apple.map((_, i) => Math.floor((Math.random() * CANVAS_SIZE[i]) / SCALE));

  const checkCollision = (piece, s = snake) => {
    if (
      (piece[0] + 1) * SCALE > CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      (piece[1] + 1) * SCALE > CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;
    for (const segment of s) {
      if (piece[0] == segment[0] && piece[1] == segment[1]) return true;
    }
    return false;
  };
  const checkAppleCollision = (newSnake) => {
    let tongueLength = 0;
    if (settings["tongueLength"] in TONGUE_CONSTANTS) {
      // checks if user is logged in
      tongueLength = TONGUE_CONSTANTS[settings["tongueLength"]];
    }
    for (let i = 0; i <= tongueLength; i++) {
      if (
        (newSnake[0][0] + dir[0] * i === apple[0] &&
          newSnake[0][1] + dir[1] * i === apple[1]) ||
        (newSnake[0][0] + dir[1] * i === apple[0] &&
          newSnake[0][1] + dir[0] * i === apple[1]) ||
        (newSnake[0][0] + dir[1] * i * -1 === apple[0] &&
          newSnake[0][1] + dir[0] * i * -1 === apple[1])
      ) {
        let newApple = createApple();
        while (checkCollision(newApple, newSnake)) {
          newApple = createApple();
        }
        setApple(newApple);
        setScore(score + 1500 / gameSpeed);
        return true;
      }
    }
    return false;
  };
  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    context.fillStyle = settings["snakeColor"];
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "pink";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  useInterval(() => gameLoop(), speed);

  return (
    <div>
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <Link to="/">
          <FaArrowCircleLeft className="home-button" />
        </Link>
        <div className="gameplay-div">
          <div
            role="button"
            tabIndex="0"
            className="game-screen"
            onKeyDown={(e) => moveSnake(e)}
          >
            <div className="rectangle" />
            <div className="score-text"> SCORE: {score}</div>
            <div className="name-text"> Welcome, {settings.playerName}</div>
            <canvas
              style={{
                backgroundColor: "lightgreen",
                position: "absolute",
                top: "180px",
              }}
              ref={canvasRef}
              width={`${CANVAS_SIZE[0]}px`}
              height={`${CANVAS_SIZE[1]}px`}
            />
            {gameOver && <dif className="game-over">GAME OVER!</dif>}
            <div className="startgame-button">
              <button onClick={startGame}>Start Playing</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Gameplay;
