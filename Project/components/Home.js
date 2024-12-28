import React from 'react'
import Ads from './Ads'
import Ownwer from './Ownwer'
import './home.css'

const Home = () => {
  return (
    <>
    <Ads/>
    <Ownwer/>
    <div className="pro-main-div">
        <div className="first-div">
            <h1><span>Featured</span> Products</h1>
        </div>
        <div className="second-div">
            <div className="pr-div">
                <div className="img-div">
                <img src="product/product1.webp"  alt="" srcset="" />
                  
                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            </div>
            <div className="pr-div">
                <div className="img-div">
                <img src="product/product2.webp"  alt="" srcset="" />

                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            </div>
            <div className="pr-div">
                <div className="img-div">
                <img src="product/product3.webp"  alt="" srcset="" />

                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            </div>
            <div className="pr-div">
                <div className="img-div">
                <img src="product/product4.webp"  alt="" srcset="" />

                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            </div>
            <button className='explore-btn'>Explore Now!</button>
        </div>
    </div>
    </>
  )
}

export default Home