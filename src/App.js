  
import './App.css';
import skinsPage from './skinsPage';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skins" component={skinsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;