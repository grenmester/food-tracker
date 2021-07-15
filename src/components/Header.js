import React from "react";
import { IoFastFood } from "react-icons/io5";

const Header = () => (
  <header className="sticky-top bg-primary text-white p-3">
    <div className="container">
      <div className="d-flex align-items-center">
        <IoFastFood className="fs-2 me-3" />
        <span className="fs-4">Food Tracker</span>
      </div>
    </div>
  </header>
);

export default Header;
