import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/ItemsList/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsList />
      </div>
    );
  }
}

export default App;
