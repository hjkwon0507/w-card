import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <Routes>
      <Route path=":path" element={<Home />} />
      <Route path="/create/:hashId" element={<Create />} />
    </Routes>
  );
}

export default App;
