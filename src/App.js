import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Card />
        
      </div>
    );
  }
}

export default App;
