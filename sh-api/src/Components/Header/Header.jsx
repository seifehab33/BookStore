import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import SearchFrom from "../SearchForm/SearchForm";
function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-column flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quas quo mollitia consectetur nesciunt eaque accusantium rerum
            consequuntur odit, quaerat magnam esse praesentium ea iusto a
            molestiae facilis eveniet iure.
          </p>
          <SearchFrom />
        </div>
      </header>
    </div>
  );
}

export default Header;
