import React from 'react'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="apna">
      <div class="logo">
        <span>Apna</span> Product
      </div>
      <h5 className='copyright'>Copyright © 2022 Apna Product</h5>
      <a href="https://github.com/snehafarkya" target={"_blank"} className="slinks"> <img src="" alt="Github" /></a>
      <a href='mailto:snhafarkya@gmail.com' target={"_blank"} className="slinks"><img src="" alt="Email" /></a>

      </div>
      <div className="products">
        <h3 className='pro-head'>Products</h3>
        <ul className="productlist">
          <li>About Us</li>
          <li>Features</li>
          <li>Open Source</li>
          <li>Sponsor</li>
        </ul>
      </div>
      <div className="support">
      <h3 className='sup-head'>Support</h3>
        <ul className="Supplist">
          <li>About Us</li>
          <li>Features</li>
          <li>Open Source</li>
          <li>Sponsor</li>
        </ul>
      </div>
      <div className="community">
      <h3 className='sup-head'>Community</h3>
        <div className="btn3">Contribute</div>
        <div className="btn2">Star us on github</div>
      </div>
    </div>
  )
}
