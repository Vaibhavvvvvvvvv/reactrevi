import React, { useEffect, useState } from 'react';

const Hoook = () => {
    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)
    useEffect(()=>{
        alert("increment")
        console.log("increment by",num)
    },[num]) //use of empty array :- beacuse when i open or refresh the page first time usi time useEffect chlega 
    return (
        <div>
            <h1>Hooks</h1>
            <h3>useEffect</h3>
            <button onClick={() => { setNum(num + 1) }}>Increment{num}</button>
            <br/>
            <button onClick={() => { setNums(nums - 1) }}>Decrement{nums}</button>
        </div>
    )
}

export default Hoook


//useState
// import React, { useState } from 'react'

// const Hoook = () => {
//     const [fruits,setFruits]=useState("banana")
//     let change=()=>{
//         if(fruits === "banana"){
//             setFruits("orange")
//         }else{
//             setFruits("banana")
//         }
//     }
//   return (
//     <div>
//     <h1>{fruits}</h1>
//     <button onClick={change}>Change</button>  
//     </div>
//   )
// }

// export default Hoook
