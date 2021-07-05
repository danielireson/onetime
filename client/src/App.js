import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TimerScreen from "./screens/TimerScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/:timerId">
            <TimerScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
