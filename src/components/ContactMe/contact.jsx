import React from 'react'
import './contact.css';
import { useEffect, useState, useRef } from 'react';
import { getAboutMe } from '../Data/data';
import SocialMedia from '../SocialMedia/socialmedia';
import { ThreeDots } from  'react-loader-spinner'

export default function Contact() {
    const [about, setAbout] = useState('')
    const [msg, setMsg] = useState('')
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState({
      name: '',
      email: '',
      number: '',
      message: '',
    })
    const formRef = useRef(null);

    useEffect(() => {
      setAbout(getAboutMe());
  }, [])


    const postData = async e => {
      e.preventDefault()
      setLoader(true)
      const {name, email, number, message} = data
  
      // eslint-disable-next-line no-unused-vars

    if (name.length === 0 || email.length === 0 || number.length === 0 || message.length === 0) {
      setError('Required all inputs must')
      setMsg('')
      setLoader(false)
    }  else {
      setLoader(true)
      // eslint-disable-next-line no-unused-vars
      const res = await fetch(
         'https://personal-cb3c9-default-rtdb.firebaseio.com/portfolio.json',
         {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             name,
             email,
             number,
             message,
           }),
         },
         // eslint-disable-next-line
       ).then((response) => {
          if (response.status === 200) {
              setMsg('Form Successfully Submitted')
              formRef.current.reset(); 
              setLoader(false)
              setError('')
          }
          else {
            setMsg('')
            setLoader(false)
             setError('Form not Submitted / Internal Server Error. please send an Email')
          }
       })
     }
    }

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
           
           <form ref={formRef}>
           
                <div className='form-container'>
                <h4><i className="ri-service-fill lg-h"></i> I welcome your messages and feedback</h4>
                    <input  onChange={e => setData({...data, name: e.target.value})} type="text" placeholder='Full Name' />
                    <input  onChange={e => setData({...data, email: e.target.value})} type="email" placeholder='Email Address' />
                    <input  onChange={e => setData({...data, number: e.target.value})} type="tel" maxLength='10'  placeholder='Phone Number' />
                    <textarea  onChange={e => setData({...data, message: e.target.value})} placeholder='Message...'/>
                    <p className='msg'>{msg}</p>
                    <p className='msg-e'>{error}</p>
                    <ThreeDots 
                           height="40" 
                           width="40" 
                           radius="9"
                           color="#ffffff" 
                           ariaLabel="three-dots-loading"
                           wrapperStyle={{}}
                           wrapperClassName=""
                           visible={loader}
                           />
                    <button onClick={postData}>Send Message <i className="ri-send-plane-fill"></i></button>
                </div>
            </form>
           </div>
       </div>
    </div>
  )
}
