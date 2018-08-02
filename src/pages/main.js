import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/tss.css';
import '../css/pages/main.css';
import Banner from '../img/banner.png';
class App extends Component {
  render() {
    return (
      <div className="container">
        <aside></aside>
        <nav></nav>
        <header className="w--full h--full">
            <div className="w--full h--full img-container d--flex" style={{backgroundImage: `url(${Banner})`}}>
                <div className="w--full h--full img-container-dark d--flex justify-center align-center">
                    <div className="header-box c--white text-a--center">
                        <div className="row-flex m--8">
                            <h1 className="f-f--ourF name">TapTap</h1>
                        </div>
                        <div className="row-flex m--8">
                            <span className="f-f--ourF slogan">Turn your passion for your city into a job.</span>
                        </div>
                        <div className="row-flex m--8" style={{margin: '18px'}}>
                            <button className="f-f--ourF b-local c--white oln--none">Become a Local</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section></section>
            <section></section>
            <section></section>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
