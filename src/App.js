import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile}></Route>
        </div>
      </Router>
  );
}

export default App;
