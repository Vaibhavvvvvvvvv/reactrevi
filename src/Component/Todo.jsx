import React, { useState } from 'react'

const Todo = () => {
    //nameChange on click
    const [name,setMyName]=useState('Hello')
    const showMy=()=>{
     let val = name ;
       val === 'Hello' ? setMyName('vaibhav') : setMyName('Hello');
    }
    console.log(name)

    //useState with array
  return (
    <div>
      <h1>To Do</h1>
      <h1>{name}</h1>
      <button onClick={showMy}>click me</button>
    </div>
  )
}
export default Todo
