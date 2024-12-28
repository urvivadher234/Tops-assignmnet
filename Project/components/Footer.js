import React from 'react'
import './footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className="footerdiv">
        <div className="firstdiv">
            <h1>MyFashion</h1>
            <p>Copyright © 2024<span>MyFashion</span></p>
            <p>Designed by Urvi Vadher</p>
        </div>
        <div className="seconddiv">
            <h1>Sitemap</h1>
            <p>Story</p>
            <p>Privacy policy</p>
            <p>Contact</p>
            <p>Products</p>
            <p>FAQs</p>
            

        </div>
        <div className="thirddiv">
            <h1>Social</h1>
            <div className="icondiv">
            <a href="#" className='icon'><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
            <a href="#" className='icon'><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="#" className='icon'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
           
            
        </div>
    </div>
  )
}

export default Footer