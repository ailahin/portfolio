import React, { useEffect, useState } from "react";
import "./Portfolio.css";



const Portfolio = () => {
  const [projects, setProjects]= useState([]);
  useEffect(()=>{
    fetch('../../allprojects.json')
    .then(reponse=>reponse.json())
    .then(data=> setProjects(data));
  }, [])
  return (


    <div className="portfolio-body">
      <div className="portfolio-text container">
        <h1>Portfolio</h1>
      </div>

      <div>
        <h1>My Amazing Works</h1>
      </div>

      <div className="container   ">
        <div class="row container   ">
          <div class="col-sm-6 mb-3 col-lg-10 mb-sm-0 d-flex mx-auto  ">
            {
              projects.map(project=> (

                <div class="card row-container   "  >

              <img src={project.img} alt="" srcset="" />
          
              <div class="card-body">
                <h5 class="card-title">Website About: {project.title}</h5>
                <p class="card-text"> Technologies Covered:
                  {project.technologies}
                </p>
                <a href={project.website} target='_blank' class="btn link-btn">
                    Live Link
                </a>
              </div>
            </div>

              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
