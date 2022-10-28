import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Login() {
  return (
    <div>
      <Navbar/>
        <div className="loginform">
          <h3 className="login-head">
            <span>Login</span>
          </h3>
          <div className="">
            <input type="text" name="" id="l-text" placeholder='Username' />
          </div>
          <div className="">
            <input type="password" name="" id="l-psaa" placeholder='Password'/>
          </div>
          <div className="">
            <input type="submit" value="Login" id='l-sub'/>
          </div>
            <h4 className='sign'>Don't have account? <span>Sign up</span></h4>
        </div>
        <Footer/>
      </div>
  )
}
