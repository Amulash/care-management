import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NurseList() {
  const [location, setLocation] = useState('');
  const [nurses, setNurses] = useState([]);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    axios.get(`http://localhost:5000/api/nurses?location=${location}`)
      .then(response => {
        setNurses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="text" value={location} onChange={handleChange} placeholder="Enter location" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {nurses.map(nurse => (
          <li key={nurse._id}>
            <img src={nurse.image} alt={nurse.name} width="50" height="50" />
            <h2>{nurse.name}</h2>
            <p>{nurse.bio}</p>
            <p>{nurse.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NurseList;
