import React from 'react';
const Mapp = () => {
  let foodItem = ["a", "b", "c", "d"];
  return (
    <>
      <h1>hello world</h1>
      <ul> 
        {foodItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default Mapp;