import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
       <nav>
    <div class="flx">
    <div class="logo">
      <span>Apna</span> Product
    </div>
    <div class="navs">
      <a href="http://" className='links'  >Products</a>
      <a href="http://" className='links' >Open Source</a>
      <a href="http://" className='links' >Sponsor</a>
      <a href="http://" class="btn1 links"> <Link to="/"> About Us </Link></a>
      <a href="http://" class="btn2 links"><Link to="/login"> Login </Link></a>
      <a href="http://" class="btn3 links"><Link to="/signup"> Sign up </Link></a>

    </div>
   </div>
  </nav>
    </div>
  )
}
