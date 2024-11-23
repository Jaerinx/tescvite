import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import "./nav.css";

const Nav = () => {
  const NavContents = [
    { content: "About Us", location: "/" },
    { content: "Events", location: "/" },
    { content: "Council Members", location: "/council-members" }
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid d-flex align-items-center">
          <NavLink to="/">
            <img className="nav__logo" src="/TESC-logo-white.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-0">
              {NavContents.map((content, index) => {
                return (
                  <>
                    <NavItem
                      key={index}
                      content={content.content}
                      location={content.location}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
