import React, { useState } from 'react'

const effectt = () => {
    const [num , setNum]=useState(0);
    const [nums , setNums]=useState(0);
  return (
    <div>
      <button onClick={()=>{setNum(num +1)}}> click me {num}</button>
      <button onClick={()=>{setNums(nums +1)}}> click me {nums}</button>
    </div>
  )
}

export default effectt
