import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/github-image.png";
import "../Home/nav.css";
import PopUpLogin from "./PopUpLogin";

const Nav = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  let history = useHistory();

  const handlePreviousPage = () => {
    history.goBack();
  };

  const handleNextPage = () => {
    history.goForward();
  };

  return (
    <div>
      <div className="content">
        <button
          type="button"
          className="btn btn-primary log"
          onClick={() => {
            setShowPopUp(true);
          }}
        >
          <i className="user icon"></i>
          Log In
        </button>
      </div>
      <div className="content">
        <i className="undo alternate icon" onClick={handlePreviousPage}>
          <p>Previous</p>
        </i>
      </div>
      <div className="content">
        <i className="redo icon" onClick={handleNextPage}>
          <p>Next</p>
        </i>
      </div>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="Github Logo" height="100x" />
        </Link>
      </nav>
      {showPopUp && <PopUpLogin setShowPopUp={setShowPopUp}></PopUpLogin>}
    </div>
  );
};
export default Nav;
