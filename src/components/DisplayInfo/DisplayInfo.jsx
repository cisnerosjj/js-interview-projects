import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import CardInfo from "./CardInfo";
import { getUserData } from "../../Services/ApiGithubService";

const DisplayInfo = ({ username, clicked, setClicked }) => {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (clicked && username) {
      getUserData(username)
        .then((data) => {
          setUserData(data);
          setClicked(false);
          setLoading(true);
        })
        .catch((error) => {
          setError(error);
        });
    }
    if (userData) {
      setLoading(false);
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
