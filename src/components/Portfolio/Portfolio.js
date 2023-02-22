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


    <div className="portfolio-body" id="portfolio">
      <div className="portfolio-text container">
        <h1>Portfolio</h1>
      </div>

      <div>
        <h1>My Amazing Works</h1>
      </div>

      <div className="container d-flex   ">
        <div class="row container  ">
          <div  className="  row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 h-50 mx-auto    ">
            {
              projects.map(project=> (

             <div >
                 <div class="card  row-container  "  >

<img src={project.img} alt="" srcset="" />

<div class="card-body aline-text-start">
  <h5 class="card-title"> <span className="website-about"> Website About: </span> <br />
   <span className="project-title"> {project.title} </span></h5>
  <p class="card-text"> <span className="technologies"> Technologies Covered:</span>
   <span className="details">  {project.technologies}</span>
  </p>
  <a href={project.website} target='_blank' class="btn link-btn">
      Live Link
  </a>
</div>
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
