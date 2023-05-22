import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home.js';
import Services from './Components/pages/Services.js';
import Products from './Components/pages/Products.js';
import SignUp from './Components/pages/SignUp.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' exact Component={Services} />
          <Route path='/products' exact Component={Products} />
          <Route path='/sign-up' exact Component={SignUp} />
        </Routes>
      </Router>
    </>


  );
}

export default App;
