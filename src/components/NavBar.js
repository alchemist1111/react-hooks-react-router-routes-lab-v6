import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        /* add styling to Navlink */
        className="nav-link"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        /* add styling to Navlink */
        className="nav-link"
      >
        Actors
      </NavLink>
    
    </nav>
    );
};

export default NavBar;
