import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:timerId">
            <Timer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
