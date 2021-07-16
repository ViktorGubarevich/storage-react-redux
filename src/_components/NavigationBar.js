import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => (
  <header className="nav-bar">
    {props.routes.map(({ isExact, path, name }) => (
      <NavLink exact={isExact} activeClassName="active" key={path} to={path}>
        {name}
      </NavLink>
    ))}
  </header>
);

export default NavigationBar;

NavigationBar.propTypes = {
  routes: PropTypes.array,
};
