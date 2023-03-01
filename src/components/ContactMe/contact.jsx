import React from 'react'
import './contact.css';

export default function Contact() {
  return (
    <div className='contact-container'>
       <div className='contact-heading'>
          <h2>Contact Me</h2>
       </div>
       <div className='contact-details'>
           <div className='social-container'>
           <div className='reach-me'>
              <h2>Reach Out me</h2>
              <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
              </div>
              <div className='name-container'>
              <i class="ri-contacts-fill lg"></i>
              <div className='name'>
                 <h3>Name</h3>
                 <h3>Metta Lavan</h3>
              </div>
              </div>
              <div className='name-container'>
              <i class="ri-contacts-fill lg"></i>
              <div className='name'>
                 <h3>Email</h3>
                 <h3>lavanmetta11@gmail.com</h3>
              </div>
              </div>
              <div className='name-container'>
              <i class="ri-contacts-fill lg"></i>
              <div className='name'>
                 <h3>Address</h3>
                 <h3>Karimnagar, Telanagana</h3>
              </div>
              </div>
           </div>

           <div className='contact-me-container'>
           
           <form>
           
                <div className='form-container'>
                <h4>Feel free to Message Me</h4>
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Phone Number' />
                    <textarea placeholder='Message...'/>
                </div>
            </form>
           </div>
       </div>
    </div>
  )
}
