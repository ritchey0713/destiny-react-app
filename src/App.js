import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />

        </Router>
      </div>
    );
  }
}

export default App;
