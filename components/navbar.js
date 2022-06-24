import React from "react";
import { Link } from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/join-us">
          Join the Party
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/buy">
                Buy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sell">
                Sell
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recipes">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/profile">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
