import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Home/Nav";
import Profile from "./components/DisplayInfo/Profile";
import { login } from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/login" component={login}></Route>
      </div>
    </Router>
  );
}

export default App;
