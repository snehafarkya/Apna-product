import React from 'react'
import Github from './Github.png'
import Ig from './Ig.png'
import Ln from './Linkedin.png'
import Twitter from './Twitter.png'
import Email from './Email.png'
import Snehaf from './Snehaf.png'


export default function Sneha() {
  return (
    <div>
       <div className="sneha">
          <div className="simg">
            <img src={Snehaf} alt="" className="simage" />
          </div>
          <div className="scontent">
            <div className="sname">Sneha Farkya</div>
            <div className="sposition">
              Content Writer, Full stack developer
            </div>
            <div className="socials">
              <a href="https://github.com/snehafarkya" target={"_blank"} className="slinks"> <img src={Github} alt="" /></a>
              <a href="https://instagram.com/sneha__farkya" target={"_blank"} className="slinks"><img src={Ig} alt="" /></a>
              <a href="https://linkedin.com/sneha_farkya" target={"_blank"} className="slinks"><img src={Ln} alt="" /></a>
              <a href="https://twitter.com/snehafarkya" target={"_blank"} className="slinks"><img src={Twitter} alt="" /></a>
              <a href='mailto:snhafarkya@gmail.com' target={"_blank"} className="slinks"><img src={Email} alt="" /></a>
            </div>
            <div className="about-s">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, minima? Ducimus voluptatum voluptas esse consectetur excepturi dolor corrupti magnam libero.
            </div>
          </div>
        </div>
    </div>
  )
}
