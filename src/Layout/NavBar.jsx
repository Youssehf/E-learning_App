import React, { useState } from "react";
import Logo from "./../logo.svg";
import { Link, NavLink } from "react-router-dom";

import useRoutes from "../utils/useRoutes";

export const NavBar = () => {
  const [dateNow, setDateNow] = useState(new Date());
  const [routes] = useRoutes();  

  setInterval(() => {
    setDateNow(new Date());
  }, 1000);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container">
        <Link to="/">
          <img className="img-fluid" src={Logo} alt="logo" />
        </Link>
  
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {routes.map((route, i) => {
              return (
                <li className="nav-item" key={i}>
                  <NavLink to={route.path} className="nav-link">
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div>{dateNow.toLocaleTimeString()}</div>
        </div>
      </div>
    </nav>
  );
};
