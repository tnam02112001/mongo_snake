import React, { useState, useRef, useEffect} from "react";
import { useInterval } from './useInterval'
import './App.css'
import {
   CANVAS_SIZE,
   SNAKE_START,
   SCALE,
   DIRECTIONS,
   APPLE_START,
   SPEED_CONSTANTS,
   settings
} from './constants'

const Gameplay = () =>
{
   
   const canvasRef = useRef()
   const [score, setScore] = useState(0);
   const [snake, setSnake] = useState(SNAKE_START);
   const [apple, setApple] = useState(APPLE_START);
   const [dir, setDir] = useState([0, -1]);
   const [speed,setSpeed] = useState(null);
   const[gameOver, setGameOver] = useState(false);

   const startGame = () =>{
      setScore(0);
      setSnake(SNAKE_START);
      setApple(APPLE_START);
      setDir([0, -1]);
      setSpeed(SPEED_CONSTANTS [settings['difficulty']]);
      setGameOver(false);
   }
   const endGame = () =>{
      setSpeed(null);
      setGameOver(true);
   }
   const moveSnake = ({keyCode}) => 
   {
      if (keyCode < 37 || keyCode > 40)
         return 
      const newDir = DIRECTIONS[keyCode]
      if (Math.abs(newDir[0]) == Math.abs(dir[0]) || Math.abs(newDir[1]) == Math.abs(dir[1]))
         return
      setDir(newDir);
   }
   const createApple= () =>
      apple.map((_, i) => Math.floor(Math.random()*(CANVAS_SIZE[i])/ SCALE));

   const checkCollision = (piece, s = snake) => {
      if (
         piece[0] * SCALE >= CANVAS_SIZE[0] ||
         piece[0] < 0 ||
         piece[1] * SCALE >= CANVAS_SIZE[1] ||
         piece[1] < 0
      )
         return true;
      for (const segment of s)
      {
         if (piece[0] == segment[0] && piece[1] == segment[1]) return true;
      }
      return false;
   }
   const checkAppleCollision = newSnake  =>{
      if(newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1])
      {
         let newApple = createApple();
         while(checkCollision(newApple, newSnake)) {
            newApple = createApple();
         }
         setApple(newApple);
         setScore(score + 10);
         return true;
      }
      return false;
   }
   const gameLoop = () => {
      const snakeCopy = JSON.parse(JSON.stringify(snake));
      const newSnakeHead = [snakeCopy[0][0] +dir[0], snakeCopy[0][1] +dir[1]];
      snakeCopy.unshift(newSnakeHead);
      if (checkCollision(newSnakeHead)) endGame()
      if(!checkAppleCollision(snakeCopy)) snakeCopy.pop();
      setSnake(snakeCopy);
   }

   useEffect(() => {
      const context = canvasRef.current.getContext("2d");
      context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
      context.clearRect(0, 0 , CANVAS_SIZE[0], CANVAS_SIZE[1]);
      context.fillStyle = settings['snakeColor'];
      snake.forEach(([x, y])=>context.fillRect(x, y, 1, 1));
      context.fillStyle = "pink";
      context.fillRect(apple[0], apple[1], 1, 1);
   }, [snake, apple, gameOver])

   useInterval(() => gameLoop(), speed);

   return (
   <div role="button" tabIndex = "0" onKeyDown = {e=> moveSnake(e)}>
      <div className = "rectangle"/>
      <prev className = "text"> SCORE: {score}</prev>
      <canvas
         style = {{backgroundColor: "lightgreen", position: "absolute", top: "80px"}}
         ref = {canvasRef}
         width = {`${CANVAS_SIZE[0]}px`}
         height = {`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <dif style = {{position: "absolute", top: "20px", left: "640px", color: "white"}}>GAME OVER!</dif>}
      <div className = "button">
         <button onClick = {startGame}>Start Playing</button>
         </div>
   </div>)
}
export default Gameplay;
