import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <PostList />
      </div>      
      
    </div>
  );
}

export default App;
