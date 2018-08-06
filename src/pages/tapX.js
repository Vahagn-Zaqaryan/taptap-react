import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/pages/experience.css';
import '../css/tss.css';
import Location from '../img/location.svg';
import Autor_Img from '../img/autor_img.jpg';
import Big_Img from '../img/big_img.jpg';
import Logo from '../img/logo.png'
class App extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
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
                    <div className="info">
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
                    <div className="img" style={{backgroundImage: `url(${Big_Img})`}}></div>
                </div>
            </div>
        );
    }
}

export default App;
