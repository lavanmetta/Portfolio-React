import React from 'react'
import './contact.css';
import { useEffect, useState } from 'react';
import { getAboutMe } from '../Data/data';
import SocialMedia from '../SocialMedia/socialmedia';

export default function Contact() {
    const [about, setAbout] = useState('')

    useEffect(() => {
        setAbout(getAboutMe());
    }, [])

  return (
    <div className='contact-container' id="contact">
       <div className='contact-heading'>
          <h2>Contact Me</h2>
       </div>
       <div className='contact-details'>
           <div className='social-container'>
           <div className='reach-me'>
              <h2>Reach me via</h2>
              <p>Feel free to message me or inquire about hiring me for your team.</p>
              </div>
              <div className='name-container'>
              <i className="ri-contacts-fill lg"></i>
              <div className='name'>
                 <h3>Name</h3>
                 <h3>{about.name}</h3>
              </div>
              </div>
              <div className='name-container'>
              <i className="ri-mail-fill lg"></i>
              <div className='name'>
                 <h3>Email</h3>
                 <h3>{about.email}</h3>
              </div>
              </div>
              <div className='name-container'>
              <i className="ri-map-pin-fill lg"></i>
              <div className='name'>
                 <h3>Address</h3>
                 <h3>{about.address}</h3>
              </div>
              </div>
              <SocialMedia/>
           </div>

           <div className='contact-me-container'>
           
           <form>
           
                <div className='form-container'>
                <h4><i className="ri-service-fill lg-h"></i> I welcome your messages and feedback</h4>
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Phone Number' />
                    <textarea placeholder='Message...'/>
                    <button>Send Message <i className="ri-send-plane-fill"></i></button>
                </div>
            </form>
           </div>
       </div>
    </div>
  )
}
