import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} style={{backgroundColor:"blue",color:"white"}}>Increment</button>
        <button onClick={()=>setCount(count-1)} style={{backgroundColor:"red",color:"white"}}>Decrement</button>

    </div>
  )
}

export default Counter