import { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/github-image.png";
import { LoginContext } from "../../Context/loginContext";
import storage from "../../utils/storage";
import "../Home/nav.css";
import PopUpLogin from "./PopUpLogin";

const Nav = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { setIsLogin } = useContext(LoginContext);
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  let history = useHistory();
  const location = useLocation();
  const isActivate = localStorage.getItem("token", "");

  useEffect(() => {
    if (isActivate !== null) {
      setIsLogin(true);
      setIsCurrentUser(true);
    }
  }, [isActivate]);

  const isHome = location.pathname.includes("profile");

  const handlePreviousPage = () => {
    history.goBack();
  };

  const handleNextPage = () => {
    history.goForward();
  };

  const signOut = () => {
    storage.remove("token");
    setIsLogin(false);
  };

  return (
    <div>
      <div className="content">
        {!isActivate ? (
          <Link to="/">
            <button
              hidden={isHome}
              type="button"
              className="btn btn-primary log"
              onClick={() => {
                setShowPopUp(true);
              }}
            >
              <i className="user icon"></i>
              Log In
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              hidden={isHome}
              type="button"
              className="btn btn-primary log"
              onClick={signOut}
            >
              <i className="user icon"></i>
              Sign Out
            </button>
          </Link>
        )}
      </div>
      <div className="content">
        <i
          className="undo alternate icon"
          hidden={!isHome}
          onClick={handlePreviousPage}
        >
          <p>Previous</p>
        </i>
      </div>
      <div className="content">
        <i className="redo icon" hidden={!isHome} onClick={handleNextPage}>
          <p>Next</p>
        </i>
      </div>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="Github Logo" height="100x" />
        </Link>
      </nav>
      {showPopUp && !isHome && (
        <PopUpLogin setShowPopUp={setShowPopUp}></PopUpLogin>
      )}
    </div>
  );
};
export default Nav;
