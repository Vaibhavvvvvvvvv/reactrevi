import React from 'react'
// import Second from './Second'
import Third from './Third'
const First = ({name}) => {
  return (
    <div>  
      <h1>data in props</h1>
      <h2>data in props{name}</h2>
      <table>
        <th>name</th>
        <tr>1</tr>
        <tr>2</tr>
      </table>
      <Third/>
      {/* <Second/> */}
    </div>
  )
} 
export default First
