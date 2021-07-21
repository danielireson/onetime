import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TimerScreen from "./screens/TimerScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ModalProvider>
          <ErrorBoundary>
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
          </ErrorBoundary>
        </ModalProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
