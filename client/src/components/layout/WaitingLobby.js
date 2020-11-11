/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BannerTitle from '../../images/banner-title.png';

class WaitingLobby extends Component {
    /*
    timer = () => {
        const [timerDays, setTimerDays] = useState('00');
        const [timerHours, setTimerHours] = useState('00');
        const [timerMinutes, setTimerMinutes] = useState('00');
        const [timerSeconds, setTimerSeconds] = useState('00');

        let interval = useRef();

        const startTimer = () => {
            const countdownDate = new Date('Nov 11, 2020 11:59:59').getTime();

            interval = setInterval(() => {
                const now = new Date();
                const distance = countdownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if(distance < 0) {
                    // stop out timer
                    clearInterval(interval.current);
                } else {
                    // update timer
                    setTimerDays(days);
                    setTimerHours(hours);
                    setTimerMinutes(minutes);
                    setTimerSeconds(seconds);
                }
            }, 1000);
        }
    };
    */

    render() {
        return (
            <body className="subpage">
                <div className="main">
                    <section className="banner-img valign-wrapper ">
                        <div className="banner-title">
                            <Link to="/">
                                <img src={BannerTitle} alt="Ajooba Trivia" className=""></img>
                            </Link> {/* redirect to home page */}
                        </div>
                    </section> {/* main banner end */}

                    {/* diplay social media on mobile devices */}
                    <nav className="mobile social-display">
                        <div className="nav-wrapper">
                            <ul className="social-media txt-center">
                                <li>Follow Us: </li>
                                <li><a href="https://www.instagram.com/ajoobatrivia/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </nav>

                    <main className="container">
                        <section className="row">
                            <div className="col s12">
                                <br/><br/>
                                <div className="card margin-auto">
                                    <div className="card-content">
                                        <h4 className="txt-center">Game Lobby</h4>
                                        <br/>
                                        <p className="txt-center">The Quiz will start right after you <b>LOGIN </b><br />
                                        In order to play, kindly log in with your <b>registered email</b> and <b>password</b>.</p>
                                        <br/>
                                        <p className="txt-center">You'll have <b>20 secs</b> for each questions in <b>ROUND 1</b></p>
                                        <p className="txt-center">The game route will be disabled at <b>2:50 pm MST</b></p> <br />
                                        <div className="txt-center width-100 margin-top-20">
                                            <Link to="/" className="btn waves-effect btn-yellow ">HOME</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                
                
            </body>
        )
    };
};

export default WaitingLobby;