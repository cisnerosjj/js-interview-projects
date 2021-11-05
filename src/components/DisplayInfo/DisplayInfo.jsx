import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import CardInfo from "./CardInfo";
import { getUserData } from "../../Services/ApiGithubService";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const [userData, setUserData] = useState(() => {
    const localData = localStorage.getItem("User Data");
    return localData ? JSON.parse(localData) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (clicked && username) {
      setLoading(true);
      getUserData(username)
        .then((data) => {
          setUserData(data);
          setClicked(false);
          setLoading(false);
          localStorage.setItem("User Data", JSON.stringify(userData));
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [clicked, userData, username]);

  return (
    <>
      {error ? (
        <ErrorPage error={error}></ErrorPage>
      ) : loading ? (
        <section>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </section>
      ) : (
        userData.user && (
          <div className="container">
            <CardInfo userData={userData} username={username}></CardInfo>
          </div>
        )
      )}
    </>
  );
};

export default DisplayInfo;
