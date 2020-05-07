import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
        <Form />
        </div>
        <div className="col-lg-3"></div>
      </div>      
      
    </div>
  );
}

export default App;
