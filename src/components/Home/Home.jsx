import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useLocalStorage } from "../../hooks/useLocaStorage";
import { LoginContext } from "../../Context/loginContext";
import "../Home/home.css";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { error } = useContext(LoginContext);
  const [username, setUsername] = useLocalStorage("text", "");

  useEffect(() => {
    setUsername("");
    if (error && !isLogin) {
      console.log(error);
      toast(error?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  return (
    <>
      <ToastContainer></ToastContainer>
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
