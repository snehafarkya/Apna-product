import React from 'react'
import Jas from './Team/Jas'
import Sneha from './Team/Sneha'

export default function Team() {
  return (
    <div className='tbody'>
      <h3 className="thead">Founders</h3>
      <p className="t-text">
        A Stephen King said, "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work." Here is our founding team✨
        </p>
      <h3 className="team">Team</h3>
      <p className="teamtag">Individuals make a team work, and teamwork makes individuals succeed.</p>
      <div className="t-flex">
       <Sneha/>
       <Jas />
        
      </div>
    </div>
  )
}
