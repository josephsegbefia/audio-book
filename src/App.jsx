/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';



function App() {


  return (
    <div>
      <Router>
        <header>
          <Nav />
        </header>
      </Router>
    </div>
  )
}

export default App
