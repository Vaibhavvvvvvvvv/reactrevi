// import React from 'react'
// // import First from './Component/First'
// // import Counter from './Component/stateVar'
// // import Clock from './Component/Clock'
// import Form from './Component/Form'
// const App = () => {
//   return (
//       <div>
//     {/* <First name="programmerspoint"/>  */}
//     {/* <Counter/> */}
//     {/* <Clock/>      */}
//     <Form/>
//     </div>    
//   )}
//   export default App


// import React from 'react';
// import Form from './Component/Form';
// import Table from './Component/Table';
// import { DataProvider } from './Component/DataContext';

// const App = () => {
//   return (
//     <DataProvider>
//       <Form />
//       <Table />
//     </DataProvider>
//   );
// };
// export default App;


//useState
// import React from 'react'
// import Todo from './Component/Todo'
// import ArrayUse from './Component/ArrayUse'
// import Hoook from './Component/Hoook'
// import Battery from './Component/Battery'
// const App = () => {
//   return (
//     <div>
//     <Todo/>    
//     <ArrayUse/>
//     <Battery/>
//     <Hoook/> 
//     </div>
//   )
// }
// export default App


// import React,{useState} from 'react'
// import Cart from './Cart/Cart'
// import Navbar from './Cart/Navbar'
// import ProductList from './Cart/productList'
// import Check from './Cart/Check'
// const App = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (product) => {
//     setCartItems(cartItems.filter((item) => item.id !== product.id));
//   };

//   return (
//     <div className="App">
//       <Navbar cartItems={cartItems} totalPrice={totalPrice} />
//       <ProductList addToCart={addToCart} />
//       <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
//       <Check/>
//     </div>
//   );
// };
// export default App  



// import React from 'react'
// import Quiz from './Component/Quiz'
// const App = () => {
//   return (
//     <div>
//       <Quiz/>      
//     </div>
//   )
// }
// export default App


//Props
// import React from 'react'
// import Cards from './Component/Cards'
// const App = () => {
//   return (
//     <div>
//       <Cards title="card1" description="Hmmm"/>
//       <Cards title="card2" description="Hmmmm"/>
//       <Cards title="card3" description="Hmmmmm"/>           
//     </div>
//   )
// }

// export default App


//useEffect
// import React,{useState,useEffect} from 'react'
// const App = () => {
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//     alert("this will rander on every reload page")
//   })
//   useEffect(()=>{
//     alert("this will rander on first time page load")
//   },[])
//   useEffect(()=>{
//     alert("this will rander when count is changed")
//   },[count])
//   return (
//     <div>
//       <h1>useEffect</h1>
//       <h2>the count {count}</h2>
//       <button onClick={()=>setCount(count +1)}>Increment</button>
//     </div>
//   )
// }

// export default App





//useRef
// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useRef } from 'react'

// const App = () => {
  
//   const [coun,setCount]=useState(0)
//   const a = useRef(0)
//   const btnRef=useRef()
//   useEffect(() => {
//     a.current = a.current + 1
//     btnRef.current.style.background="red"   
//     console.log(`rendering and the value of ${a.current}`)
//   })
//   return (
//     <div>
//     <h1>{coun}</h1>
//     <button ref={btnRef} onClick={()=>setCount(coun +1)}>click me</button>
//     <button onClick={()=>{btnRef.current.style.display="none"}}>changed</button>
//     </div>
//   )
// }
// export default App



//conditional rendering
// import React from 'react'
// import Cond from './Component/Cond'

// const App = () => {
//   return (
//     <div>
//       <Cond title="condition 1" description="todo"/>
//       <Cond title="condition 2" description="todo 1"/>
//       <Cond title="condition 3" description="todo 2"/>
//       <Cond title="condition 4" description="todo 3"/>
//     </div>
//   )
// }

// export default App


//navbar with router
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;