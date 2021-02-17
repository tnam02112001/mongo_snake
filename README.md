# Mongo Snake
Mongo Snake is a simple Snake Game developed by Nam Nguyen, Edward Du and Michael Greene

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
`npm install --save husky lint-staged prettier`
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

### Required dependencies:
1. `npm install react-bootstrap-validation --save`
2. `npm install bootstrap --save`
3. `npm install --save react-horizontal-scrolling-menu`
4. `npm install axios --save`
