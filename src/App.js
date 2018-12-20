import React, { Component } from 'react';
import animatecss from 'animate.css';
import './App.css';
import Photos from "./Component/Photos";


class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">My Instagram</h1>
          </header>
            <Photos accessToken=""/>
        </div>
    );
  }
}

export default App;
