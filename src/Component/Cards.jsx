import React from 'react'

const Cards = (props) => {
  return (
    <>
<div className="card" style={{width: "18rem;" ,border:"solid 3px black"}}>
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">{props.description}</h5>
</div>      
    </>
  )
}

export default Cards
