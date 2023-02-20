import React from "react";
import "./Portfolio.css";



const Portfolio = () => {
  return (
    <div className="portfolio-body">
      <div className="portfolio-text container">
        <h1>Portfolio</h1>
      </div>

      <div>
        <h1>My Amazing Works</h1>
      </div>

      <div className="container">
        <div class="row container">
          <div class="col-sm-6 mb-3 col-lg-4 mb-sm-0">
    
            <div class="card"  >
            <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn link-btn">
                    Live Link
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
