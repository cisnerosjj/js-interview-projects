import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";

const Home = () => {
  return (
    <>
      <div class="typewriter">
        <h1>Find Github Users!</h1>
      </div>
      <Link to="/profile">
        <button type="button" className="btn btn-primary btn-lg" >
          Start!
        </button>
      </Link>
    </>
  );
};

export default Home;
