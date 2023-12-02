/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Navbar()
{


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-success mx-5 my-3 "
      style={{ height: "5rem"}} 
    >
       <div className="logo mx-2">
       <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/agriculture-logo-design-template-7ec6b05615bf6da4c81fd7670b7b8dc0_screen.jpg?ts=1630938264" height="70px" width="100px" alt="..." />
      </div> 
      <div className="container-fluid">
        <a className="navbar-brand" style={{ color: "yellow" }} href="/">
          <b>
            {" "}
            <h1>Agri Help</h1>
          </b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color:"orange" }}
                href="/Weathercheck"
              >
                 <button
              className="btn btn-info mx-2"
              data-toggle="modal"
              data-target="/signupModal"
            >
              Weather Check
            </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Fire" style={{ color: "orange" }}>
              <a href="http://127.0.0.1:5000">  <button
              className="btn btn-warning mx-2"
              data-toggle="modal"
              data-target="/signupModal"
            >
              Crop Fire Prediction
            </button></a>
              </a>
            </li>
      
          </ul>

          <div className="mx-2 ">
            
          <a href="http://localhost:8000/contact">  <button
              className="btn btn-danger mx-2"
              data-toggle="modal"
              data-target="/signupModal"
            >
              Complaint Box
            </button></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

