import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        DAO Voting Platform
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/proposals" className="nav-link">
              Proposals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create-proposal" className="nav-link">
              Create Proposal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
