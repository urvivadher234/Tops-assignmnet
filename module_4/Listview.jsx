import React from 'react'

const Listview = () => {
  const list=['React Toolkit','React redux','React hooks']
  return (
    <div className="maindiv" style={{
      backgroundColor:"lightgreen",
      padding:20,
      width:300
    }}>
      <h2>React in ListView</h2>
      {
        list.map((i)=>{
          return(
            <>
            
            <p style={{fontSize:25}}><input type="checkbox"/>{i}</p>

         

            </>

            
          )
        })
      }
   </div>
  )
}

export default Listview