import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-img"> 
    <div className="about-container ">
      <section className="edu-volu-details">
        <div className="container ">

         
          <h1 className="title-about">About</h1>

        </div>

        <div className="text-special about-me col-8 mx-auto">
        I am an enthusiastic and driven individual with good analytical and problem-solving skills. I am passionate about learning and developing new skills, and I am interested in working in a range of technology environments. I am committed to becoming a full-stack web developer and have gained knowledge and experience in HTML, CSS, Bootstrap, JavaScript, React, version control systems such as GitHub, and basic knowledge of Python and MySQL. I am currently in the process of learning back-end development. I am seeking an internship, entry-level web development, or software development job
        </div>

        <div class="container">
          <div className="" >
            <div class="row">
              <div class="col-6 ">
                <h1 className="title-edu">Education</h1>

                <div className="education-details ">
                  <h4 className="uni-name">
                    {" "}
                    University Of Bedfordshire, United Kingdom
                  </h4>
                  <p> BSc Hon’s in Computer Science </p>
                  <p className="text-special">
                    <small>September 2020 - May 2023</small>
                  </p>
                  <p className="text-special">
                    Modules: Fundamentals of computer science, database and
                    computer networks, Principles of programming and data
                    structures, mathematics and concepts for computational
                    thinking, desktop application development and software
                    engineering, web technologies and platforms, concepts and
                    technologies of artificial intelligence, distributed service
                    architectures, agile projects management.
                  </p>

                  <div className="last-part">
                  </div>

                  <div></div>

                  <div></div>
                </div>
              </div>
              <div class="col-6 ">
                <h1 className="title-edu">Volunteering</h1>

                <div className="education-details">
                  <h4 className="uni-name"> Campus Representative</h4>
                  <p> University of Bedforshire </p>
                  <p className="text-special">
                    <small>September 2022- present</small>
                  </p>
                  <p className="text-special activities">
                    Activities:
                     •Meetings with Campus Forums, SU Executive
                    Committee Meeting, Union Parliament, Attend University
                    campus related meetings. <br />
                    •Skills Training and support Campus Development Coordinator
                    1:1s. <br />
                    •Liaise with fellow Campus Reps and Academic Reps, attend
                    Campus Forums and Talking to Students. Report monthly to Union Parliament and Contribute to Student Voice newsletters. Also, Campaign for change get support from SU
                    to create policies.
                  </p>

                  <div></div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" ">
     <div>

    
      <button className='hire-me-btn' > 
      <a className='hire-me-btn' href=""> Hire Me </a>
      </button>

      </div>

      </div>
    </div>
    </div>
  );
};

export default About;
