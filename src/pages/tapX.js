import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/experience.css';
import '../css/tss.css';
import Location from '../img/location.svg';
import Autor_Img from '../img/autor_img.jpg';
import Big_Img from '../img/big_img.jpg';
import Logo from '../img/logo.png'
import Down_Arrow from '../img/arrow-down.svg';
class App extends Component {
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
                                    <span className="c--white text-t--up font-w--bold">Book Now</span>
                                </button>
                            </div>
                            <div className="location">
                                <div className="loc-box d--flex align-center">
                                    <div className="icon">
                                        <img src={Location} alt="Location"/>
                                    </div>
                                    <div className="loc">
                                        <span className="f-f--ourF">Yerevan, Armenia</span>
                                    </div>
                                </div>
                            </div>
                            <div className="header">
                                <h1 className="f-f--ourF">Spacious, crozy & bright studio</h1>
                            </div>
                            <div className="lang">
                                <span className="f-f--ourF">Language • <span className="f-f--ourF">English</span></span>
                            </div>
                            <div className="text">
                                Lorem ipsum dolor sit amet, tale ludus omnesque nec an. Pri minim probatus ex, nulla ubique eruditi eu pri. No ullum ridens antiopam vel, veritus corpora philosophia pri ei. Ea sit luptatum adversarium, duo decore fabulas accusam id. Cu habeo equidem necessitatibus cum. Facer errem tempor per ut, mazim vivendo comprehensam..
                            </div>
                            <div className="mapping">

                            </div>
                            <div className="tour-by">
                                <div className="tour-by-box d--flex align-center">
                                    <div className="img-author" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                    <div className="author">
                                        <div className="label">Tour by</div>
                                        <div className="name">Vahagn Zaqaryan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img" style={{backgroundImage: `url(${Big_Img})`}}>
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
