import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Context/loginContext";
import "../Home/home.css";

const Home = () => {
  const [isCurrentUser, setIsCurrentUser] = useState();
  const { isLogin } = useContext(LoginContext);

  useEffect(() => {
    if (isLogin) {
      setIsCurrentUser(true);
    } else setIsCurrentUser(false);
  }, [isLogin]);

  console.log(isLogin);
  console.log(isCurrentUser);

  return (
    <>
      <div className="typewriter">
        <h1>Find Github Users!</h1>
      </div>
      {isCurrentUser && (
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
