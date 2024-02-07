import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ cartItems, totalPrice }) => {
  // Check if totalPrice is defined before using toFixed(2)
  const formattedTotalPrice = totalPrice ? `$${totalPrice.toFixed(2)}` : '';

  return (
    <div className="navbar">
      <div className="cart-container">
        <span className="cart-count">{cartItems.length}</span>
        <ShoppingCartIcon />
      </div>
      <span className="total-price">{formattedTotalPrice}</span>
    </div>
  );
};

export default Navbar;
