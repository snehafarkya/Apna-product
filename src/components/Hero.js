import React from 'react'
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, sint voluptatum magni numquam mollitia maiores provident ipsum nobis reiciendis quo.
          </div>
          <button className='product-btn'>Products</button>
        </div>
        <div className="h-image">
          <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  )
}

