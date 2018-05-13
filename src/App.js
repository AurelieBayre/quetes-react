import React, { Component } from 'react';
import MonComposant from './MonComposant.js'; 
import Author from './Author.js'; 
import MonComposantAvecState from './MonComposantsAvecState.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <MonComposantAvecState />
        </div>
        <div>
          <MonComposant maprop="coucou je suis une prop" />
        </div>
        <div>
          <Author name="Aurélie" />
        </div>
      </div>
    );
  }
}

export default App;
