import React, { Component } from 'react';
import  Search from './components/Search.js'
import './App.css';
import Listposting from './components/Listposting.js';

class App extends Component {
  render() {
    return (
    <div>
      <Search/>
      <Listposting/>
    </div>
    );
  }
}

export default App;
