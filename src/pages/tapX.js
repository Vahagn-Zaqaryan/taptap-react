import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/experience.css';
import '../css/tss.css';
import Location from '../img/location.svg';
import Logo from '../img/logo.png'
import Down_Arrow from '../img/arrow-down.svg';

// ---DateBase---
import TourStore from '../stores/tourStore';

class App extends Component {
    constructor() {
        super()
        this.state = {
            tours: TourStore.getAll()
        };
    }
    componentDidMount () {
        window.scrollTo(0, 0);
    }
    handleClickGoDown(){
        let main = document.getElementById("main");
        function doScrolling(duration) {
            let startingY = window.pageYOffset
            let elementY = main.offsetTop
            let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
            let diff = targetY - startingY
            let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
            let start

            if (!diff) return
                window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp
            let time = timestamp - start
            let percent = Math.min(time / duration, 1)
            percent = easing(percent)

            window.scrollTo(0, startingY + diff * percent)
                if (time < duration) {
                    window.requestAnimationFrame(step)
                }
            })
        }
        doScrolling(1000);
    }
    render() {
        let id = parseInt(this.props.match.params.id, 10);
        let basa = this.state.tours;
        let i = basa.findIndex(x => x.id === id);
        let img = require(`../img/${basa[i].img}`);
        let author = require(`../img/${basa[i].by.img}`);
        return (
            <div className="experiences">
                <nav className="nav-tour-d">
                    <div className="logo-box d--flex justify-center">
                        <Link to='/'>
                            <div className="circle-logo d--flex justify-center align-center">
                                <div className="">
                                    <img src={Logo} alt="Logo"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </nav>
                <div className="experience-d d--flex">
                    <div className="info" id="main">
                        <div className="info-box">
                            <div className="book-now">
                                <button>
                                    <div className="book-dark-hover">
                                        <span className="c--white text-t--up font-w--bold">Book Now</span>
                                    </div>
                                </button>
                            </div>
                            <div className="location">
                                <div className="loc-box d--flex align-center">
                                    <div className="icon">
                                        <img src={Location} alt="Location"/>
                                    </div>
                                    <div className="loc">
                                        <span className="f-f--ourF">{basa[i].location.city}, {basa[i].location.country}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="header">
                                <h1 className="f-f--ourF">{basa[i].header}</h1>
                            </div>
                            <div className="lang">
                                <span className="f-f--ourF">Language • <span className="f-f--ourF">{basa[i].language}</span></span>
                            </div>
                            <div className="text">
                                {basa[i].info}
                            </div>
                            <div className="mapping">

                            </div>
                            <div className="tour-by">
                                <div className="tour-by-box d--flex align-center">
                                    <div className="img-author" style={{backgroundImage: `url(${author})`}}></div>
                                    <div className="author">
                                        <div className="label">Tour by</div>
                                        <div className="name">{basa[i].by.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img" style={{backgroundImage: `url(${img})`}}>
                        <div className="down-button">
                            <div className="downB-gradient" onClick={this.handleClickGoDown.bind(this)}>
                                <div className="box-flex-downB d--flex justify-center align-center">
                                    <div className="arrow-downB">
                                        <img src={Down_Arrow} alt="Go to Tour"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
