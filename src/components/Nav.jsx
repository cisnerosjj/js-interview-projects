import { Link } from "react-router-dom";
import logo from "../assets/github-image.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Github Logo" height="50x" />
      </Link>
      
    </nav>
  );
};
export default Nav;
