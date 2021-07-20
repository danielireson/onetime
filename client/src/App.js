import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TimerScreen from "./screens/TimerScreen";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ModalProvider>
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
        </ModalProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
