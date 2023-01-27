// Components & Assets
import Logo from "../../assets/react-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation-bar">
      <Link to={"/"}>
        <img src={Logo} id="logo" alt="Logo" />
      </Link>
      <Link to={"/burgers"}>BURGER SHOP</Link>
    </nav>
  );
};

export default Nav;
