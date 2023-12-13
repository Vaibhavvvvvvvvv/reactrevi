import React from 'react'

const formHand = () => {
  return (
    <div>
    <form>
        name<input type='text' name='name' value={nm}/><br/>
        email<input type='text' name='email' value={em}/>
        <button>Add data</button>
        </form>      
    </div>
  )
}

export default formHand
