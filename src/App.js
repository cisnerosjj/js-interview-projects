import "./App.css";
import Profile from "./components/Profile";
import logo from "./github-image.png";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Github Logo" height="50x"/>
      <Profile></Profile>
    </div>
  );
}

export default App;
