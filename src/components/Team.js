import React from 'react'
import Jas from './Team/Jas'
import Sneha from './Team/Sneha'

export default function Team() {
  return (
    <div className='tbody'>
      <h3 className="thead">Founders</h3>
      <p className="t-text">Debitis ad nobis laboriosam ab incidunt nihil dignissimos sed obcaecati magnam consequuntur, quibusdam, autem sapiente numquam accusantium dolor odio dolore repellendus officiis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint sit aspernatur culpa ipsa mollitia provident aut in odit eos corrupti.</p>
      <h3 className="team">Team</h3>
      <p className="teamtag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, asperiores?</p>
      <div className="t-flex">
       <Sneha/>
       <Jas />
        
      </div>
    </div>
  )
}
