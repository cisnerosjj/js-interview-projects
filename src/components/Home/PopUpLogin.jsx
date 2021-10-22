import { useEffect, useState } from "react";
import { login } from "../auth/Login";
import "../Home/PopUpLogin.css";

const PopUpLogin = ({ setShowPopUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitRegister = (e) => {
    e.preventDefault();
    // register(username, password);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    login(username, password);
    
  };
  const toggleSignup = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };

  const toggleLogin = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#57B846";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };
  useEffect(() => {
    toggleSignup();
    toggleLogin();
  }, []);

  return (
    <div className="modalBackground">
      <div className="container">
        <div className="form-modal">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setShowPopUp(false);
              }}
            >
              X
            </button>
          </div>
          <div className="form-toggle">
            {
              <button id="login-toggle" onClick={toggleLogin}>
                log in
              </button>
            }
            <button id="signup-toggle" onClick={toggleSignup}>
              Register
            </button>
          </div>

          <div id="login-form">
            <form onSubmit={onSubmitLogin}>
              <input
                type="text"
                placeholder="Enter username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                required
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="btn login">
                login
              </button>
            </form>
          </div>

          <div id="signup-form">
            <form onSubmit={onSubmitRegister}>
              <input
                type="text"
                required
                value={username}
                placeholder="Choose username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                required
                value={password}
                placeholder="Create password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="btn signup">
                <i className="fa fa-spinner fa-pulse"></i> create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpLogin;
