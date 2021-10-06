import "./App.css";
import { useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="navbar">GitHub Search</div>
      <Profile></Profile>
    </div>
  );
}

export default App;
