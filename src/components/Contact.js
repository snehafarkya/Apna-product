import React from 'react'
import Contactimg from '../assets/Contactimg.png'
export default function Contact() {
  return (
    <div className='cbody'>
      <h3 className="chead">Contact Us</h3>
      <p className="cpara">Sint officia labore nihil consequuntur sapiente, quas id quidem iusto beatae reprehenderit?</p>
      <div className="contact-flex">
          <div className="illustration">
            <img src={Contactimg} alt="" />
          </div>
          <div className="cform">

          </div>
      </div>    
    </div>
  )
}
