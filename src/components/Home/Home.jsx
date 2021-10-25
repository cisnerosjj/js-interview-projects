import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";

const Home = () => {
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const isActivate = localStorage.getItem("token", "");

  useEffect(() => {
    if (isActivate !== null) {
      setIsCurrentUser(true);
    }

    if (isActivate !== null && isCurrentUser === false) {
      setIsCurrentUser(true);
    }
  }, [isActivate, isCurrentUser, setIsCurrentUser]);

  return (
    <>
      <div className="typewriter">
        <h1>Find Github Users!</h1>
      </div>
      {isCurrentUser ? (
        <Link to="/profile">
          <button type="button" className="btn btn-primary btn-lg">
            Start!
          </button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
