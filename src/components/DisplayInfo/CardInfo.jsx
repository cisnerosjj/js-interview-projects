import { useContext, useState } from "react";
import { DataContext } from "../../Context/dataContext";
import Repositories from "./Repositories";

const CardInfo = () => {
  const { data } = useContext(DataContext);
  const [showRepos, setshowRepos] = useState(false);

  const handleShowRepos = (e) => {
    e.preventDefault();
    if (!showRepos) {
      setshowRepos(true);
    }
    if (showRepos) setshowRepos(false);
  };

  return (
    <>
      <div className="display-flex" style={{ display: "inline-flex" }}>
        <div
          className="ui card col-4"
          style={{ width: 320, height: 530, marginRight: 5 }}
        >
          <div className="image">
            <img
              src={data?.user?.avatar_url}
              alt={data?.user?.avatar_url}
            ></img>
          </div>
          <div className="content" style={{ maxHeight: 130 }}>
            <h4 className="header">{data?.user?.name}</h4>
            <div className="meta">
              <span className="date">{data?.user?.location}</span>
            </div>
            <div className="description">
              Orgs:
              <a
                href={data?.user?.organizations_url}
                style={{ textDecoration: "none" }}
              >
                {data?.user?.organizations_url}
              </a>
            </div>
          </div>
          <div className="extra content">
            <button
              onClick={handleShowRepos}
              className="ui primary button ms-3"
            >
              Show Repositories
            </button>
            <p></p>
            <div>
              <i className="user icon"></i>
              Followers:&nbsp;&nbsp;
              {data?.user?.followers}
            </div>
          </div>
        </div>
        <div className="col-8">
          {showRepos && <Repositories></Repositories>}
        </div>
      </div>
    </>
  );
};

export default CardInfo;
