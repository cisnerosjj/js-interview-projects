import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { LoginContext } from "../../Context/loginContext";
import "../Home/home.css";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { isLogin } = useContext(LoginContext);
  const { setIsLogin, error } = useContext(LoginContext);

  useEffect(() => {
    if (error) {
      toast(error.message, {
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
