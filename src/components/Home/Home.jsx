import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";

const Home = () => {
  // const [click, setClicked] = useState(false)

  const resetData = () => {
    console.log("click");
    // setClicked(true)
  };

  return (
    <>
      <div className="typewriter">
        <h1>Find Github Users!</h1>
      </div>
      <Link to="/profile">
        <button
          type="button"
          onClick={resetData}
          className="btn btn-primary btn-lg"
        >
          Start!
        </button>
      </Link>
    </>
  );
};

export default Home;
