import { useState } from "react";
import DisplayInfo from "../DisplayInfo/DisplayInfo";

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    setUsername(username);

    setClicked(true);

    setInterval(() => {
      setLoading(false); //check loader
    }, 1000);
  };

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="ui search mb-5 mt-5">
            <div className="ui icon input">
              <i className="search icon"></i>
              <input
                className="prompt"
                type="text"
                placeholder="Search username here..."
                value={username}
                onChange={onChangeHandler}
              ></input>
            </div>
            <button
              className="ui primary button ms-3"
              onClick={submitHandler}
              type="submit"
            >
              <i className="github icon"></i>
              Search
            </button>
          </div>
          <DisplayInfo
            username={username}
            clicked={clicked}
            setClicked={setClicked}
          ></DisplayInfo>
        </>
      )}
    </div>
  );
};

export default Profile;
