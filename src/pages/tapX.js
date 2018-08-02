import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        TapX
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default App;
