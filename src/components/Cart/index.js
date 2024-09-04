import React from 'react';
import './index.css';

const Cart = ({ cartItems = [], placeOrder }) => {
  // Ensure cartItems is an array by providing a default empty array if it's undefined

  const totalCost = cartItems.reduce((total, item) => total + item.cost, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} className="cart-image" />
              {item.name} - ₹{item.cost} ({item.unit})
            </li>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
      <h3>Total Cost: ₹{totalCost}</h3>
      {cartItems.length > 0 && <button onClick={placeOrder}>Place Order</button>}
    </div>
  );
};

export default Cart;
