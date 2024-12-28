import React from 'react'
import './story.css'

const Story = () => {
  return (
    <div className="storydiv">
      <div className="titlediv">
        <div className="txt">
        <h1><span>My</span></h1>
        <h1>Fashion</h1>
        </div>
        
        <div className="divimg">
          <img src="story.jpeg" alt="story" srcset="" />
        </div>
      </div>
      <div className="team-div">
        <div className="titel-div">
            <h1><span>Meet</span> Our Team</h1>
        </div>
        <div className="member-div">
          <div className="member">
            <img src="people/firstmember.jpeg" alt="" />
            <h1>Name</h1>
            <p>Description</p>
          </div>
          <div className="member">
            <img src="people/secondmember.jpeg" alt="" />
            <h1>Name</h1>
            <p>Description</p>
          </div>
          <div className="member">
            <img src="people/thirdmember.jpeg" alt="" />
            <h1>Name</h1>
            <p>Description</p>
          </div>
          <div className="member">
            <img src="people/forthmember.jpeg" alt="" />
            <h1>Name</h1>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Story