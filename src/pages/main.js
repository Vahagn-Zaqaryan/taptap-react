import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/tss.css';
import '../css/pages/main.css';
import Logo from '../img/logo.png'
import Banner from '../img/banner.png';
import Star_Rate from '../img/star.svg';
import Autor_Img from '../img/autor_img.jpg';
import Yerevan from '../img/yerevan.jpg';
class App extends Component {
  render() {
    return (
      <div className="container">
        <aside></aside>
        <nav className="pst--abs">
            <div className="logo">
                <img src={Logo} alt="Logo" title="Logo"/>
            </div>
        </nav>
        <header className="w--full h--full">
            <div className="w--full h--full img-container d--flex" style={{backgroundImage: `url(${Banner})`}}>
                <div className="w--full h--full img-container-dark d--flex justify-center align-center">
                    <div className="header-box c--white text-a--center">
                        <div className="row-flex m--8">
                            <h1 className="f-f--ourF name">TapTap</h1>
                        </div>
                        <div className="row-flex m--8">
                            <span className="f-f--ourF slogan">Turn your <span className="c--white f-f--ourF">passion</span> for your city into a <span className="c--white f-f--ourF">job</span>.</span>
                        </div>
                        <div className="row-flex m--8" style={{margin: '18px'}}>
                            <button className="f-f--ourF b-local c--white oln--none">Become a Local</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section className="tour_section">
                <div className="tour_box">
                    <div className="flex-container font-w--bold section-name">
                        <div>Our Fantastic Tours</div>
                    </div>
                    <div className="flex-container kkk">
                        <div className="tour_card">
                            <div className="card-img" style={{backgroundImage: `url(${Yerevan})`}}></div>
                            <div className="card-info">
                                <div className="status justify-center align-center"><div className="d-flex">Free</div></div>
                                <div className="location">YEREVAN • ARMENIA</div>
                                <div className="name">Cool Tours With Hovo Mkhitaryan in YVN</div>
                                <div className="rate">
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <span className="rate_number">192</span>
                                </div>
                                <div className="autor">
                                    <div className="img" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                    <div className="tour-by">Tour by <span className="rate_number">Vahagn Zaqaryan</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="tour_card">
                            <div className="card-img" style={{backgroundImage: `url(${Yerevan})`}}></div>
                            <div className="card-info">
                                <div className="status justify-center align-center"><div className="d-flex">Free</div></div>
                                <div className="location">YEREVAN • ARMENIA</div>
                                <div className="name">Cool Tours With Hovo Mkhitaryan in YVN</div>
                                <div className="rate">
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <span className="rate_number">192</span>
                                </div>
                                <div className="autor">
                                    <div className="img" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                    <div className="tour-by">Tour by <span className="rate_number">Vahagn Zaqaryan</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="tour_card">
                            <div className="card-img" style={{backgroundImage: `url(${Yerevan})`}}></div>
                            <div className="card-info">
                                <div className="status justify-center align-center"><div className="d-flex">Free</div></div>
                                <div className="location">YEREVAN • ARMENIA</div>
                                <div className="name">Cool Tours With Hovo Mkhitaryan in YVN</div>
                                <div className="rate">
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <img src={Star_Rate} alt="Star" title="Star"/>
                                    <span className="rate_number">192</span>
                                </div>
                                <div className="autor">
                                    <div className="img" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                    <div className="tour-by">Tour by <span className="rate_number">Vahagn Zaqaryan</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">

            </section>
            <section className="">

            </section>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
