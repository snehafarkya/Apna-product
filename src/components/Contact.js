import React from 'react'
import Contactimg from '../assets/Contactimg.png'
import Form from './Form'
export default function Contact() {
  return (
    <div className='cbody'>
      <h3 className="chead">Contact Us</h3>
      <p className="cpara">Lets make something awesome together! Get in touch</p>
      <div className="contact-flex">
          <div className="illustration">
            <img src={Contactimg} alt="" />
          </div>
          <div className="cform">
              <Form />
          </div>
      </div>    
    </div>
  )
}
