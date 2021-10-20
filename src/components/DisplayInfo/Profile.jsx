import { useEffect, useState } from "react";
import DisplayInfo from "./DisplayInfo";

const Profile = () => {
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState(false);
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setUsername(username);
    setSearch(true);

    setClicked(true);
    if(clicked && !username.length){
      console.log("papas")
    }
  
  };

  return (
    <div>
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
            disabled={!username}
          >
            <i className="github icon"></i>
            Search
          </button>
        </div>
        {username && search && (
          <DisplayInfo
            username={username}
            clicked={clicked}
            setClicked={setClicked}
          ></DisplayInfo>
        )}
      </>
    </div>
  );
};

export default Profile;
