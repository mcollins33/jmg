import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Footer />
        
      </div>
    );
  }
}

export default App;
