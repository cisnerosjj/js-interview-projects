import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/profile">
        <button>Start to search users!</button>
      </Link>
    </>
  );
};

export default Home;
