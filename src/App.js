import "./App.css";
import Profile from "./components/Profile";
import logo from "./github-image.png";

function App() {
  return (
    <div className="App">
      <img src={logo} height="50x" />
      <Profile></Profile>
    </div>
  );
}

export default App;
