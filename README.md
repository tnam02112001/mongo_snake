# Mongo Snake

MongoSnake is a 2D Snake Game developed by Nam Nguyen, Edward Du and Michael Greene from February to March, 2021. In our game, you are a snake travelling around the grass to eat the apples. The more you eat, the longer you are, and the higher your score is. When maneuvering around the grass, you are not allowed to hit the border of the grassfield, or hit your own body. Unfortunately, dying is inevitable, but it is your job to survive for as long as possible. Enjoy!

![image](https://github.com/tnam02112001/mongo_snake/blob/master/docs/mongosnake.jpg?raw=true)

---

# UI Prototype

| Link                                                                                | Last Modified |
| ----------------------------------------------------------------------------------- | ------------- |
| [Figma](https://www.figma.com/file/czEoN201Y6qoVh6ACjE5F2/MongoSnake?node-id=8%3A7) | Feb 3 2021    |

---
# Build Status
| CI Server | Status|
| --- | --- |
[TravisCI](https://travis-ci.com/github/tnam02112001/mongo_snake) |![Markdown](https://travis-ci.com/tnam02112001/mongo_snake.svg?branch=master)

---

# Development Environment Set Up

## Frontend Environment

### 1 - Installing Node.js and npm

For the Frontend Environment, we will use Node.js and npm, a package manager for Node.js packages.If you have it already on your computer, skip this section. Otherwise, please downloand and install [Nodejs](https://nodejs.org/en/download/) according to your operating system.

### 2 - Installing other npm depedencies

Our project requires other Node.js depedencies that can be installed using npm.
| Package Name | Install |
| --- | --- |
|axios| `npm install axios`|
|react-router-dom| `npm install react-router-dom`|
|react-bootstrap| `npm install react-bootstrap bootstrap`|
|react-horizontal-scrolling-menu| `npm install react-horizontal-scrolling-menu`|
|enzyme| `npm install enzyme`|
|enzyme-adapter-react-16| `npm install enzyme-adapter-react-16`|
|framer-motion| `npm install framer-motion`|

### 3 - Starting the Frontend Environment

Once the installation finishes, you can start the Frontend Environment by calling `npm start`

## Backend Environment

### 1 - Accessing to the Backend directory

All the backend source code is located inside the `rest-api` directory. Make sure you change the current directory to `rest-api` before setting up the Backend Environment

### 2 - Installing Flask for the RestAPI

For the Backend Environment, we will use a REST API built in Python with a library called [Flask](https://flask.palletsprojects.com/en/1.1.x/). Please install [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/) according to your operarating system

### 3 - Installing other depedencies

Our project requires other Python packages that can be installed using pip.
| Package Name | Install |
| --- | --- |
|flask-cors| `pip install flask-cors`|
|pymongo| `pip install pymongo`|
|dnspython|`pip install dnspython`|
|coverage (For testing)|`pip install coverage`|
|pytest (For testing)|`pip install pytest`|

## Style Guides

Contributors to this project are encouraged to follow these following style guides:
| Environement | Description |
| --- | --- |
| Python | [PEP8](https://www.python.org/dev/peps/pep-0008/) |
| Javascript/React| [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/) |

### Setting up IDE plugins

#### Integrating Python Style Checker into Visual Studio Code

1. Install the [pycodestyle](https://pypi.org/project/pycodestyle/) package
2. Install the pylint package and change the default linter to pycodesyle by following this [instruction](https://code.visualstudio.com/docs/python/linting)

#### Integrating Automatic Javascript/React Code Formatter (Prettier) into Visual Studio Code

1. Install the Prettier dependency:
   `npm install husky lint-staged prettier`
2. Add the following field to the package.json section:

```
+  "husky": {
+    "hooks": {
+      "pre-commit": "lint-staged"
+    }
+  }

+ "lint-staged": {
+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --write"
+   ]
+ },
```

---

# Diagrams

Please visit our [Wikipage](https://github.com/tnam02112001/mongo_snake/wiki/MongoSnake) for diagrams
