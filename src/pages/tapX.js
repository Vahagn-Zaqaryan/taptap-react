import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TapX</h1>
        <Link to="/">Home</Link>
        <p>This is Tap Experience Number {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default App;
