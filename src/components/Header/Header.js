import React from 'react';
import  './Header.css'
import image from '../../images/header-proile-pic.png'
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <div className='body ' id='home'>
            <section className='container-sm container-lg container-xxl container-md ' >
          <div className="container header  " id='header'>
          <div className='header-text container container-sm ' >
           <h2 className='animation'> <span className='text-color'>Welcome </span>  to </h2>
            <h1 className='animation'>Aminul Islam Lahin <span className='world'>world!</span></h1> 
            <h3 className='full-stack animation'> A Full Stack Web Developer</h3>
            <p className='description-text' > I am a full-stack web developer based in the United Kingdom, and I am currently pursuing a bachelor's degree in Computer Science, with plans to graduate in May 2023. I am passionate about learning and developing new skills, which enables me to work across a range of technology environments. </p>
            <div className='all-btn'> 
            <button className='about-btn'>
              <Link to='about1' type='button'> About</Link>
            </button>
            
            <button className='linkedin-btn'>
              <a href="https://www.linkedin.com/in/ailahin/" target="blank" > <i class="fa-brands fa-linkedin"></i></a>
              </button>
            <button className='github-btn'> 
              <a href="https://github.com/ailahin" target="blank" > <i class="fa-brands fa-github"></i></a>
            </button>
            <button className='gmail-btn'> 
              <a href="mailto:aminulislamlahin@gmail.com" target="blank" > <i class="fa-solid fa-envelope"></i></a>
            </button>
            
          </div>

           </div>

           <div className='header-image container row-cols-sm-1 row-cols-md-2 row-cols-lg-3 '>
            <img className='header-image' src={image} alt="" srcset="" />
           </div>
         
          </div> 
          </section> 

         
            
        </div>
    );
};

export default Header;