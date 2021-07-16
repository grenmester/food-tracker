import React from "react";
import { IoFastFood } from "react-icons/io5";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <IoFastFood className="d-inline-block align-text-top fs-4 me-3" />
        Food Tracker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#inventory-list">
              Inventory
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#wish-list">
              Wish List
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
