import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Navbar.css";
function Navbar() {
  const [togglemenu, setToggle] = useState(false);
  const handlenavbar = () => {
    setToggle(!togglemenu);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content flex">
          <div className="brand-img">
            <img src={logoImg} alt="" />
          </div>
          <div className={`links ${togglemenu ? "links" : "links active"}`}>
            <Link className="link-brand" to="/">
              Home
            </Link>
            <Link className="link-brand" to="/about">
              About
            </Link>
          </div>
          <div className="open-menu" onClick={handlenavbar}>
            <HiOutlineMenuAlt3 size={50} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
