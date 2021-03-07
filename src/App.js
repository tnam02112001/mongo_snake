import './App.css';
import skinsPage from './skinsPage';
import settingsPage from './settingsPage';
import Home from './Home';
import testPage from './testPage';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Gameplay from './gameplay';
import leaderboardPage from './leaderboardPage';
import upgradesPage from './upgradesPage';
import { AnimatePresence, motion } from "framer-motion";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
   
function App() {
  return (
    <Router>
      <div className="App">
        
        <Route render={({location}) => (
          // <TransitionGroup>
          //   <CSSTransition 
          //     key={location.key}
          //     timeout={300}
          //     classNames="fade"
          //   >
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/skins" component={skinsPage} />
                <Route path="/settings" component={settingsPage} />
                <Route path ="/gameplay" component = {Gameplay} />
                <Route path="/leaderboard" component={leaderboardPage} />
                <Route path="/upgrades" component={upgradesPage} />
                <Route path="/tests" component={testPage} />
              </Switch>
            </AnimatePresence>
        //     </CSSTransition>
        // </TransitionGroup>
        )} />
        
      </div>
    </Router>
  );

  
}

export default App;