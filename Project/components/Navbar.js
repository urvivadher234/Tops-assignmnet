import React from 'react'
import './component.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navdiv'>
       <h1 className='logo'>MyFashion</h1>
       <input className='searchbar' placeholder='Search here....' type="search" />
        <div className="anchordiv">
        <Link to="/">Home</Link>
        <Link to="/story">Story</Link>
        <Link to="/product">Product</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contactus">Contact</Link>
        <div className="icondiv">
        <a href="#"> <FontAwesomeIcon icon={faUser} /></a>
        <a href="#"><FontAwesomeIcon icon={faBagShopping} /></a>
        </div>
        </div>

    </div>
  )
}

export default Navbar