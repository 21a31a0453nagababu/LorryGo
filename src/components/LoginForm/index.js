import React,{useState} from 'react';

import './index.css'; 
import LogoImage from '../../assets/images/logo.jpg';

import { useNavigate} from 'react-router-dom';

const LoginForm=()=>{

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const navigate = useNavigate();

    const handleLogin=()=>{
        if(username==="nagababu" && password==="Nani@2002"){
          navigate('/');

        }
        else{
            alert('Invalid username or password');
        }
        };

    return(
        <div className="login-container">
      <img src={LogoImage} alt="Logo" className="logo" />
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

};

export default LoginForm;
