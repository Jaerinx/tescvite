import "./Nav.css";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

const NavItem = ({ content, location }) => {
  return (
    <li className="nav__items nav-item text-center px-4">
      <NavLink className="nav-link" to={location}>
        <span className="nav-text">{content}</span>
      </NavLink>
    </li>
  );
};
NavItem.propTypes = {
  content: propTypes.string.isRequired,
  location: propTypes.string.isRequired
};
export default NavItem;
