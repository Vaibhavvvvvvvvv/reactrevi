import React, { useState } from 'react';
const ArrayUse = () => {
  const myBioData = [
    {
      id: 0,
      myName: "vaibhav",
      age: 21,
    },
    {
      id: 1,
      myName: "vaibhav",
      age: 21,
    },
    {
      id: 2,
      myName: "vaibhav",
      age: 21,
    },
  ];

  const [myArray, setMyArray] = useState(myBioData);

  const clearArray = () => {
    setMyArray([]);
  };

  return (
    <div>
      {myArray.map((curelm) => (
        <h1 key={curelm.id}>
          name: {curelm.myName}, age: {curelm.age}
        </h1>
      ))}
      <button onClick={clearArray}>Clear</button>
    </div>
  );
};

export default ArrayUse;
