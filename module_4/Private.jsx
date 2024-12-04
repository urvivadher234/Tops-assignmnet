import React from 'react'

const Private = () => {
  return (
    <div className='maindiv' style={{
        padding:20,
        backgroundColor:"gray",
        borderRadius:10
    }}>
        <div className='first' style={{
            display:"flex",
            gap:50,
            borderRadius:5,
            backgroundColor:"skyblue",
            padding:5
        }}>
            <p>Navigation</p>
            <a><button style={{
                height:40
            }}>Logout</button></a>
        </div><br />
        <div className='second' style={{
            background:"white",
            height:150,
            
            padding:20,
            textAlign:"center",
            borderRadius:5
        }}>
            <p>Private Views</p>
        </div>
        <div className='third' style={{
            backgroundColor:"skyblue",
            height:30,
            borderRadius:5
        }}>
            <p>Footer</p>
        </div>
    </div>
  )
}

export default Private