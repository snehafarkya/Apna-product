import React from 'react'

export default function Form() {
  return (
    <div className='cform'>
      <h4 className="fhead">Get In Touch</h4>
      <div className="text">
      <input type="text" name="" id="text" placeholder='Enter your name' />

      </div>
      <div className="email">
      <input type="email" name="" id="email" placeholder='Enter your email' />
      </div>
      <div className="msg">
      <textarea name="" id="msg" cols="30" rows="10" placeholder='Write message here...' ></textarea>
      </div>
      <button type="submit" id='sub'>Submit</button>
    </div>
  )
}
