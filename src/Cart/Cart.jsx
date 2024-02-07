import React from 'react'

const Cart = ({ cartItems, removeFromCart }) => {
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    );
  };
export default Cart
