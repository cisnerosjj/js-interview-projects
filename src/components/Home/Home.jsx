import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/loginContext";
import "../Home/home.css";

const Home = () => {
  const { isLogin } = useContext(LoginContext);

  return (
    <>
      <div className="typewriter">
        <h1>Find Github Users!</h1>
      </div>
      {isLogin && (
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
