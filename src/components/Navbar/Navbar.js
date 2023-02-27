import React from "react";
import "./Navbar.css";
import {Link } from 'react-scroll'
import cv from '../../images/Aminul-Islam-Lahin.pdf'
const Navbar = () => {
  return (
    <div className="navbar fixed-top justify-content-around row-cols-sm-4 row-cols-md-2   g-4 mx-auto">
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
    <Link class="nav-link blog-btn mb-2 "  to="home"  data-bs-toggle="pill" type="button"> Home </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link blog-btn mx-2" to="about"   type="button" data-bs-toggle="pill" >About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link blog-btn mx-2" to="portfolio"   data-bs-toggle="pill" type="button">Portfolio</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link blog-btn mx-2" to="contact"  data-bs-toggle="pill" type="button">Contact</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link"  to='blog'  data-bs-toggle="pill" type="button">Blog</Link>
  </li>
  <li class=" position-absolute  end-0" role="presentation">
    
    <a href={cv} download>
    <button class="download-cv-btn"  data-bs-toggle=""> <i class="fa-solid fa-download"></i> Download CV  </button>
    </a>
   
  </li>
  
</ul>
    
    </div>
  );
};

export default Navbar;
