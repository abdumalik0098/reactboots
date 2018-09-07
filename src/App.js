import React, { Component } from 'react';
import Navbars from './components/Navbars';
import Carousels from "./components/Carousels";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbars/>
          <Carousels/>
      </div>
    );
  }
}

export default App;
