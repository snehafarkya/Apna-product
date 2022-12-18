import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from "../assets/heroimg.png"
export default function Hero() {
  return (
    <div>
      <div className="herosec">
        <div className="h-content">
          <div className="headline">
          <span>Manage your money </span> in the best possible way
          </div>
          <div className="para">
              Make every Rupee Count With Budget Tracker. With highly tech enriched application, use voice assistant to record your transactions.
          </div>
          <Link to="/Product" ><button className='product-btn'> Products </button></Link>
        </div>
        <div className="h-image">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  )
}
