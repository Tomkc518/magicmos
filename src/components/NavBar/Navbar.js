import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <nav className="navbar navbar-light bg-light sticky-top">
      <a className="navbar-brand">Magic MOs</a>
      <span className="navbar-text ml-auto">
        Where Average People Meet Magic! Also sometimes other Things!
      </span>
      <form className="form-inline ml-sm-auto">
        <input className="form-control mr-sm-1 mr-0" type="search" placeholder="Search for Cards" aria-label="Search"></input>
        <button className="btn my-2 my-sm-0" type="submit">Search</button>
      </form>
  </nav>
);

export default NavBar;