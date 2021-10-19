import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";

const CardInfo = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={data?.user?.avatar_url}></img>
        </div>
        <div className="content">
          <a className="header">Kristy</a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
