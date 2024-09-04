import React, { useState } from 'react';
import './index.css';

const OrderConfirmation = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    contact: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="order-confirmation-container">
      {!formSubmitted ? (
        <form className="order-form" onSubmit={handleSubmit}>
          <h2>Confirm Your Details</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={userInfo.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      ) : (
        <div className="lorry-animation">
          <div className="lorry">🚚</div>
          <h3>Your order is confirmed, {userInfo.name}!</h3>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
