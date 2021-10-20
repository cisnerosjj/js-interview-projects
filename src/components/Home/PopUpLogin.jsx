import { useState } from "react";
import "../Home/PopUpLogin.css";

const PopUpLogin = ({ setShowPopUp }) => {
  const [nickname, setNickname] = useState();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setShowPopUp(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Enter your name to continue</h3>
        </div>
        <div className="body">
          <input
            className="ui input"
            type="text"
            placeholder="Enter your Name"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          ></input>
        </div>
        <div className="footer">
          <button
            className="ui danger button"
            onClick={() => {
              setShowPopUp(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            id="continueBtn"
            className="ui primary button"
            type="submit"
            onClick={() => {
              setShowPopUp(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpLogin;
