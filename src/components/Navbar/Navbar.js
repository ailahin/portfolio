import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar fixed-top justify-content-around">
      {/* <nav class="navbar nav-pills nav-fill  bg-white navbar-expand-lg  ">
        <div class="container-fluid text-light">
          <div>
            <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class=" nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <ul class="nav nav-pills  d-flex" id="pills-tab" role="tablist">
      <li class="nav-item">
    <button class="nav-link blog-btn mb-2 "   data-bs-toggle="pill" type="button">Home</button>
  </li>
  <li class="nav-item">
    <button class="nav-link blog-btn mx-2"   data-bs-toggle="pill" type="button">About</button>
  </li>
  <li class="nav-item">
    <button class="nav-link blog-btn mx-2"   data-bs-toggle="pill" type="button">Blog</button>
  </li>
  <li class="nav-item">
    <button class="nav-link"   data-bs-toggle="pill" type="button">Contact</button>
  </li>
  <li class=" position-absolute  end-0" role="presentation">
    <button class="download-cv-btn"  data-bs-toggle=""> Download CV</button>
  </li>
  
</ul>

    </div>
  );
};

export default Navbar;
