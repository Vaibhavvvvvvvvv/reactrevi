import React, { useState } from 'react';

const Cond = (props) => {
  const [count, setCount] = useState(0);
  const [shbtn, setShBtn] = useState(false);

  return (
    <div>
      <h1>conditional render</h1>
      <h5 className="card-title">{props.title}</h5>
      <h2>{count}</h2>
      <h5 className="card-title">{props.description}</h5>
      <button onClick={() => setCount(count + 1)}>Add me</button>

      {/* Logic to update shbtn state */}
      <button onClick={() => setShBtn(!shbtn)}>
        Toggle Show Button
      </button>

      {/* Conditional rendering based on the shbtn state */}
      {shbtn ? (
        <button>Show button is true</button>
      ) : (
        <button>Show button is false</button>
      )}
    </div>
  );
};

export default Cond;
