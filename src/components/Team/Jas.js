import React from 'react'
import Github from './Github.png'
import Ig from './Ig.png'
import Ln from './Linkedin.png'
import Twitter from './Twitter.png'
import Email from './Email.png'
import Jass from './Jaspreet.png'

export default function Jas() {
  return (
    <div>
      <div className="jas">
          <div className="jimg">
          <img src={Jass} alt="" className="jimage" />
          </div>
          <div className="jcontent">
            <div className="jname">Jaspreet Singh Saini</div>
            <div className="sposition">
            User Experience Designer, Frontend Developer
            </div>
            <div className="socials">
              <a href="https://github.com/jaspreet099" target={"_blank"} className="slinks"> <img src={Github} alt="" /></a>
              <a href="https://www.instagram.com/jaspreet.designs/" target={"_blank"} className="slinks"><img src={Ig} alt="" /></a>
              <a href="https://www.linkedin.com/in/jaspreet099/" target={"_blank"} className="slinks"><img src={Ln} alt="" /></a>
              <a href="https://twitter.com/s_jaspreet099" target={"_blank"} className="slinks"><img src={Twitter} alt="" /></a>
              <a href='jaspreet.work099@gmail.com' target={"_blank"} className="slinks"><img src={Email} alt="" /></a>
            </div>
            <div className="about-j">
            I am a Ui Designer with over two years of experience crafting digital designs, helping businesses expand their capacity for impact 🚀
            </div>
          </div>
        </div>
    </div>
  )
}
