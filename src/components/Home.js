import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Care Management</h1>
      <nav>
        <ul>
          <li><Link to="/nurse-profile">Create Nurse Profile</Link></li>
          <li><Link to="/nurses">Find a Nurse</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
