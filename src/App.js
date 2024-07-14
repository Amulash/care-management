import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NurseProfile from './components/NurseProfile';
import NurseList from './components/NurseList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nurse-profile" element={<NurseProfile />} />
        <Route path="/nurses" element={<NurseList />} />
      </Routes>
    </Router>
  );
}

export default App;
