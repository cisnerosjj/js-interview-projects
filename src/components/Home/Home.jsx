import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocaStorage";
import "../Home/home.css";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [username, setUsername] = useLocalStorage("text", "");

  useEffect(() => {
    setUsername("");
  }, []);

  return (
    <>
      <div className="typewriter">
        <h1>Find Github Users!</h1>
      </div>
      {true && (
        <Link to="/profile">
          <button type="button" className="btn btn-primary btn-lg">
            Start!
          </button>
        </Link>
      )}
    </>
  );
};

export default Home;
