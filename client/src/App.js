import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TimerScreen from "./screens/TimerScreen";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
