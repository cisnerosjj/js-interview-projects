import { useEffect, useState } from "react";
import "../Home/PopUpLogin.css";

const PopUpLogin = ({ setShowPopUp }) => {
  const [nickname, setNickname] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
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
    toggleLogin();
    toggleSignup();
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
            <form>
              <input type="text" placeholder="Enter username" />
              <input type="password" placeholder="Enter password" />
              <button type="button" className="btn login">
                login
              </button>
            </form>
          </div>

          <div id="signup-form">
            <form>
              {/* <input type="email" placeholder="Enter your email" /> */}
              <input type="text" placeholder="Choose username" />
              <input type="password" placeholder="Create password" />
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
