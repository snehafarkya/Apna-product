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
      <a href="" className='links'  ><Link to="/Product">Products</Link></a>
      <a href="http://" className='links' ><Link to="/Opensource">Open Source</Link></a>
      <a href="/" className='links' ><Link to="/Product">Sponsor</Link></a>
      <a href="http://" class="btn1 "> <Link to="/"> About Us </Link></a>
      <a href="http://" class="btn2 "><Link to="/login"> Login </Link></a>
      <a href="http://" class="btn3 "><Link to="/signup"> Sign up </Link></a>

    </div>
   </div>
  </nav>
    </div>
  )
}
