import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Materials from './components/Materials';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const placeOrder = () => {
      setCartItems([]);
      window.location.href = '/order-confirmation';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/materials" element={<Materials addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} placeOrder={placeOrder} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;