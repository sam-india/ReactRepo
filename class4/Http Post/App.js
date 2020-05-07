import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';

function App() {
  return (
    <div className="container">
      <div className="row">
        <PostCreate />
      </div>      
      
    </div>
  );
}

export default App;
