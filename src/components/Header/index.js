import React from 'react';
import {NavLink} from 'react-router-dom';
import LogoImage from '../../assets/images/logo1.jpg';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav ml-auto">
         <img src={LogoImage} alt="Logo" className="logo" />
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/materials" activeClassName="active">Materials</NavLink>
        <NavLink to="/cart" activeClassName="active">Cart</NavLink>
        <NavLink to="/profile" activeClassName="active">Profile</NavLink>
       <button className="button"> <NavLink to="/login" activeClassName="active">LogOut</NavLink></button>
      </nav>
    </header>
  );
};

export default Header;
