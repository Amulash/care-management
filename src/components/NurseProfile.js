import React, { useState } from 'react';
import axios from 'axios';

function NurseProfile() {
  const [profile, setProfile] = useState({
    name: '',
    image: '',
    location: '',
    bio: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/nurses', profile)
      .then(response => {
        console.log(response.data);
        alert('Profile created successfully');
      })
      .catch(error => {
        console.error(error);
        alert('Error creating profile');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" name="image" value={profile.image} onChange={handleChange} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="location" value={profile.location} onChange={handleChange} required />
      </div>
      <div>
        <label>Bio:</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange} required />
      </div>
      <button type="submit">Create Profile</button>
    </form>
  );
}

export default NurseProfile;
