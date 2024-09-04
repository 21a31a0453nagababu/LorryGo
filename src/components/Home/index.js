import React from 'react';
import Header from '../Header';
import './index.css';

const Home =()=> {
    return(
    <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Logistics Made Easy:Just Lorry Go</h1>
        <img
          src="https://i.ibb.co/zHdBNjQ/lorrygo.jpg"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        At Lorry Go, we specialize in transporting a wide range of essential materials to meet your construction and logistical needs. Whether you're a contractor, a farmer, or a business owner, our app is designed to provide you with reliable and efficient transportation solutions for all your bulk materials.
        </p>
        <button type="button"
              className="shop-now-button"
              onClick={() => window.location.href = '/materials'}>
  Book Now
</button>
         
      </div>
      <img
        src="https://i.ibb.co/zHdBNjQ/lorrygo.jpg"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
    )
}

export default Home