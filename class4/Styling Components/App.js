import React from 'react';
import logo from './logo.svg';
import './App.css';
import './external.css';

import ExternalStyle from './components/ExternalStyle';


function App() {
  return (
    <div className="container">
      <div className="row">
        <ExternalStyle text={true} />
      </div>      
      
    </div>
  );
}

export default App;
