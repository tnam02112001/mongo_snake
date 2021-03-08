import "./App.css";
import skinsPage from "./skinsPage";
import settingsPage from "./settingsPage";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gameplay from "./gameplay";
import leaderboardPage from "./leaderboardPage";
import upgradesPage from "./upgradesPage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skins" component={skinsPage} />
            <Route path="/settings" component={settingsPage} />
            <Route path="/gameplay" component={Gameplay} />
            <Route path="/leaderboard" component={leaderboardPage} />
            <Route path="/upgrades" component={upgradesPage} />
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
