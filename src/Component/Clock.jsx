import React, { useState } from 'react'
const Clock = () => {
    let newTime = new Date().toLocaleTimeString();
    const [currentt,setCurrentt]=useState(newTime)
    const UpdateTime =()=>{
        let newTime= new Date().toLocaleTimeString();
        setCurrentt(newTime);
    }
  return (
    <div>
      <h1>{currentt}</h1>
      <button onClick={UpdateTime}> get time</button>
    </div>
  )
}

export default Clock;
