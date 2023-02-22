import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
       <div id='contact'>

        <div>
            <h3 className='contact-me'>Contact Me</h3>
            <h1 className='text'> I Want To Hear From You </h1>
        </div>
        <div className='container d-flex'>
            <div className='addresss-area '>

                <div >
                    <div className='d-flex '>
                        <div className='icon bg rounded-full '>
                        <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className='email-info'>
                            <h3 >Email</h3>
                            <span className='gmail'> <h5>aminulislamlahin@gmail.com</h5></span>
                        </div>
                    </div>

                    <div className='d-flex'>
                    <div className='icon bg'>
                    <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className='phone'>
                            <h3  >Phone</h3>
                            <span className='phone-no'><h5>+447760660427</h5></span>
                        </div>
                    </div>
                    
                </div>

            </div>
        <div className='contact-form'>

<form action="#" method="post">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>
  </div>
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" required> </textarea>
  </div>
  <button type="submit">Send</button>
</form>

            
        </div>
        </div>
       </div>

   
    );
};

export default Contact;

