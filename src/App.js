import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Profile from './components/Profile';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />

        </div>
      </Router>
    );
  }
}

export default App;
