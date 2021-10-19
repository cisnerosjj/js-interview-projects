import { Link } from "react-router-dom";
import logo from "../../assets/github-image.png";
import "../Home/nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="Github Logo" height="100x" />
        </Link>
      </nav>
    </div>
  );
};
export default Nav;
