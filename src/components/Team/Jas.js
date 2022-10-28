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
              <a href="https://github.com/snehafarkya" target={"_blank"} className="slinks"> <img src={Github} alt="" /></a>
              <a href="https://instagram.com/sneha__farkya" target={"_blank"} className="slinks"><img src={Ig} alt="" /></a>
              <a href="https://linkedin.com/sneha_farkya" target={"_blank"} className="slinks"><img src={Ln} alt="" /></a>
              <a href="https://twitter.com/snehafarkya" target={"_blank"} className="slinks"><img src={Twitter} alt="" /></a>
              <a href='mailto:snhafarkya@gmail.com' target={"_blank"} className="slinks"><img src={Email} alt="" /></a>
            </div>
            <div className="about-j">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum, et rem libero molestiae excepturi impedit voluptatum debitis laudantium doloremque?
            </div>
          </div>
        </div>
    </div>
  )
}
