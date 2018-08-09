import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Magic MOs</a>
      <span class="navbar-text">
        Where Average People Meet Magic! Also sometimes other Things!
      </span>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search for Cards" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </nav>
);

export default NavBar;