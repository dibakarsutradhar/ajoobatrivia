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
                                        <h4 className="txt-center">Waiting Lobby</h4>
                                        <br/>
                                        <p className="txt-justify">You will be able to compete in the event on <b>11 November 2020 </b> 
                                        at <b>2:00pm (Malaysian Standard Time)</b>. In order to play, kindly log in with your <b>registered email</b> and <b>password</b>. Follow <a href="https://instagram.com/ajoobatrivia" className="txt-bold">@ajoobatrivia</a>  on <a href="https://instagram.com/ajoobatrivia" className="txt-bold">Instagram</a> for updates.</p>
                                        <br/>
                                        <p className="txt-justify">In the mean time, you can go to our home page and review rules and regulations, how to play and other information</p>
                                        <div className="txt-center width-100 margin-top-20">
                                            <Link to="/" className="btn waves-effect btn-yellow ">Go to Home</Link>
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