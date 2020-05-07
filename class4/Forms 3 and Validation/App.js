import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
        <Register />
        </div>
        <div className="col-lg-3"></div>
      </div>      
      
    </div>
  );
}

export default App;
