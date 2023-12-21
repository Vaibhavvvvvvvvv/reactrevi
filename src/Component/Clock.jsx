import React, { useState } from 'react'
const Clock = () => {
    let newTime = new Date().toLocaleTimeString();   //make varable and store local time in variable
    const [currentt,setCurrentt]=useState(newTime)   //make state varable and assign newtime to curentt state
    const UpdateTime =()=>{        //make update function to update time on button click
        newTime= new Date().toLocaleTimeString();
        setCurrentt(newTime);
    }
  return (
    <div>
      <h1>{currentt}</h1> 
      <button onClick={UpdateTime}>get time</button>
    </div>
  )
}

export default Clock;
