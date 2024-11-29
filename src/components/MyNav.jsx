import React from "react";
import logo from "../assets/logo/logo.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ width: "100px", height: "55px" }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">My List</a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
