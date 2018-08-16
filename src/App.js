import React, { Component } from 'react';
import './css/style.min.css';
import './css/tss.min.css';
import { Route } from 'react-router-dom';
import Main from './pages/main';
import TapX from './pages/tapX';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Route exact path="/" component={Main}/>
        <Route exact path="/home" component={Main}/>
        <Route exact path="/main" component={Main}/>
        <Route exact path="/experiences/:id" component={TapX}/>
      </div>
    );
  }
}

export default App;
