import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../auth/Login";
import { register } from "../auth/Register";
import "../Home/PopUpLogin.css";

const PopUpLogin = ({ setShowPopUp }) => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const history = useHistory();

  const onSubmitRegister = (e) => {
    e.preventDefault();
    register(newUsername, newPassword);
    setShowPopUp(false);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    login(username, password);
    setShowPopUp(false);
    history.push("/")
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
                value={newUsername}
                placeholder="Choose username"
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <input
                type="password"
                value={newPassword}
                placeholder="Create password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="submit" className="btn signup">
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
