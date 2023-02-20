import React from 'react';
import  './Header.css'
import image from '../../images/header-proile-pic.png'

const Header = () => {
    return (
        <div className='body'>

          <div className="container header ">
          <div className='header-text container'>
           <h2> <span className='text-color'>Welcome </span>  to </h2>
            <h1>Aminul Islam Lahin <span className='world'>world!</span></h1> 
            <h3 className='full-stack'> A Full Stack Web Developer</h3>
            <p className='description-text'> I am a full-stack web developer based in the United Kingdom, and I am currently enrolled in a Computer Science program, with plans to graduate in May 2023. I am passionate about learning and developing new skills, which enables me to work across a range of technology environments. </p>
            <div className='all-btn'> 
            <button className='about-btn'>About Me</button>
            
            <button className='linkedin-btn'>
              <a href="" target="blank" > <i class="fa-brands fa-linkedin"></i></a>
              </button>
            <button className='github-btn'> 
              <a href="" target="blank" > <i class="fa-brands fa-github"></i></a>
            </button>
            <button className='gmail-btn'> 
              <a href="" target="blank" > <i class="fa-solid fa-envelope"></i></a>
            </button>
            
          </div>

           </div>

           <div className='header-image container'>
            <img className='header-image' src={image} alt="" srcset="" />
           </div>
          </div>

         
            
        </div>
    );
};

export default Header;