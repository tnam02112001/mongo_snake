const CANVAS_SIZE = [1280, 640];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 40;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

//Data of the setting. Will be modified
const settings = {snakeColor: 'purple', difficulty: 'medium'};
const SPEED_CONSTANTS = {easy: 150, medium: 100, hard: 50};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  DIRECTIONS,
  SPEED_CONSTANTS,
  settings
};
