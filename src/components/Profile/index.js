// src/components/Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    avatar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', profile);
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={profile.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={profile.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea 
            name="bio" 
            value={profile.bio} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Avatar URL:</label>
          <input 
            type="text" 
            name="avatar" 
            value={profile.avatar} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
      {profile.avatar && (
        <div>
          <h2>Preview:</h2>
          <img src={profile.avatar} alt="Profile Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </div>
      )}
    </div>
  );
};

export default Profile;
