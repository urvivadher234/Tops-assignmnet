import React from 'react'
import './product.css'

const Product = () => {
  return (
   <>
   <div className="pro-main-div">
        <div className="first-div">
            <h1><span>Our</span> Products</h1>
        </div>
        <div className="second-div">
            <div className="pr-div">
                <div className="img-div">
                <img src="product1.webp"  alt="" srcset="" />
                  
                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            <button className='explore-btn'>Add to cart</button>

            </div>
            <div className="pr-div">
                <div className="img-div">
                <img src="product2.webp"  alt="pp" srcset="" />

                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            <button className='explore-btn'>Add to cart</button>

            </div>
            <div className="pr-div">
                <div className="img-div">
                <img src="product3.webp"  alt="" srcset="" />

                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            <button className='explore-btn'>Add to cart</button>

            </div>
            <div className="pr-div">
                <div className="img-div">
                <img src="product4.webp"  alt="" srcset="" />

                </div>
               <div className="prname-div">
                <h3>Product 1</h3>
                <p>price</p>
               </div>
               <p>Description</p>
            <button className='explore-btn'>Add to cart</button>

            </div>
        </div>
    </div>
   </>
  )
}

export default Product