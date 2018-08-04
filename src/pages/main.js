import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/tss.css';
import '../css/pages/main.css';
import Logo from '../img/logo.png'
import Banner from '../img/banner.png';
import Star_Rate from '../img/star.svg';
import Autor_Img from '../img/autor_img.jpg';
import Yerevan from '../img/yerevan.jpg';
import Arrow_Right from '../img/arrow_right.svg';
import Clock from '../img/clock.jpg';
import Share from '../img/share.svg';
import TourGuide from '../img/tour_guide.jpg';
class App extends Component {

    handleClickOnBLocal(){
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
                            <div className="row-flex m--8 slogan-resize">
                                <span className="f-f--ourF slogan">Turn your <span className="c--white f-f--ourF">passion</span> for your city into a <span className="c--white f-f--ourF">job</span>.</span>
                            </div>
                            <div className="row-flex m--8" style={{margin: '18px'}}>
                                <button className="f-f--ourF b-local c--white oln--none" onClick={this.handleClickOnBLocal.bind(this)}>Become a Local</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main id="main">
                <section className="tour_section">
                    <div className="tour_box">
                        <div className="flex-container font-w--bold section-name">
                            <div>
                                <span>
                                    Our Fantastic Tours
                                </span>
                            </div>
                            <div className="all-view">
                                <button className="all-button">
                                    <span>View Tours</span>
                                    <img src={Arrow_Right} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex-container kkk">
                            <div className="tour_card">
                                <Link to="/experiences/1">
                                    <div className="card-img" style={{backgroundImage: `url(${Yerevan})`}}></div>
                                    <div className="card-info">
                                        <div className="status justify-center align-center"><div className="d-flex">Free</div></div>
                                        <div className="location">YEREVAN • ARMENIA</div>
                                        <div className="name">Cool and Fucking Tours With Hovo Mkhitaryan in YVN</div>
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
                                </Link>
                            </div>
                            <div className="tour_card">
                                <Link to="/experiences/2">
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
                                </Link>
                            </div>
                            <div className="tour_card">
                                <Link to="/experiences/3">
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
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tour_section">
                    <div className="tour_box">
                        <div className="flex-container font-w--bold section-name">
                            <div>
                                <span>
                                    Our Recent Blogs
                                </span>
                            </div>
                            <div className="all-view">
                                <button className="all-button">
                                    <span>View Blogs</span>
                                    <img src={Arrow_Right} alt="Arrow"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex-container kkk">
                            <div className="blog_card">
                                <div className="blog-img" style={{backgroundImage: `url(${Clock})`}}>
                                    <div className="blog">
                                        <div className="header">What She Doesn’t Want You to Know</div>
                                        <div className="date">17 July, 2018 • Tourism Tips </div>
                                        <div className="text">Lorem ipsum dolor sit amet, libris posidonium eum et, summo aliquip epicuri vim an. Rebum sententiae his ei, eum suas probo neDuo noster scripserit concludaturque et, te admodum phaedrum ius.Cu vim sapientem prodesset, mel at magna habeo instructior. Id graeci intellegat sea, sit ea tempor...<span className="text-more">Read More</span></div>
                                        <div className="share justify-center align-center"><div className="d-flex"><img src={Share} alt="Share"/></div></div>
                                        <div className="autor">
                                            <div className="img" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                            <div className="blog-by">by <span className="rate_number">Vahagn Zaqaryan</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_card">
                                <div className="blog-img" style={{backgroundImage: `url(${Clock})`}}>
                                    <div className="blog">
                                        <div className="header">What She Doesn’t Want You to Know</div>
                                        <div className="date">17 July, 2018 • Tourism Tips </div>
                                        <div className="text">Lorem ipsum dolor sit amet, libris posidonium eum et, summo aliquip epicuri vim an. Rebum sententiae his ei, eum suas probo neDuo noster scripserit concludaturque et, te admodum phaedrum ius.Cu vim sapientem prodesset, mel at magna habeo instructior. Id graeci intellegat sea, sit ea tempor...<span className="text-more">Read More</span></div>
                                        <div className="share justify-center align-center"><div className="d-flex"><img src={Share} alt="Share"/></div></div>
                                        <div className="autor">
                                            <div className="img" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                            <div className="blog-by">by <span className="rate_number">Vahagn Zaqaryan</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog_card">
                                <div className="blog-img" style={{backgroundImage: `url(${Clock})`}}>
                                    <div className="blog">
                                        <div className="header">What She Doesn’t Want You to Know</div>
                                        <div className="date">17 July, 2018 • Tourism Tips </div>
                                        <div className="text">Lorem ipsum dolor sit amet, libris posidonium eum et, summo aliquip epicuri vim an. Rebum sententiae his ei, eum suas probo neDuo noster scripserit concludaturque et, te admodum phaedrum ius.Cu vim sapientem prodesset, mel at magna habeo instructior. Id graeci intellegat sea, sit ea tempor...<span className="text-more">Read More</span></div>
                                        <div className="share justify-center align-center"><div className="d-flex"><img src={Share} alt="Share"/></div></div>
                                        <div className="autor">
                                            <div className="img" style={{backgroundImage: `url(${Autor_Img})`}}></div>
                                            <div className="blog-by">by <span className="rate_number">Vahagn Zaqaryan</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="b-tour-guide">
                    <div className="img w--full h--full-p" style={{backgroundImage: `url(${TourGuide})`}}>
                        <div className="img-g w--full h--full-p">
                            <div className="text-box text-a--center d--flex justify-center align-center">
                                <div className="f-f--ourF big-text">Do You Want to Become a Tour Guide?</div>
                                <div className="info font-w--bold">Lorem ipsum dolor sit amet, id eos cibo maiestatis instructior, quis affert adipisci ne ius.</div>
                                <div className="button f-f--ourF">
                                    <button className="f-f--ourF">
                                        Become a Guide
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
          </div>
        );
    }
}

export default App;
