/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BannerTitle from '../../images/banner-title.png';
import team1 from '../../images/team1.jpg';
import team2 from '../../images/team2.jpg';
import team3 from '../../images/team3.jpg';
import team4 from '../../images/team4.jpg';
import team5 from '../../images/team5.jpg';
import team6 from '../../images/team6.jpg';
import team7 from '../../images/team7.jpg';
import team8 from '../../images/team8.jpg';
import team9 from '../../images/team9.jpg';
import team10 from '../../images/team10.jpg';

class Landing extends Component {
    render() {
        return (
            <div>
                <section className="banner-img valign-wrapper">
                    <div className="banner-title">
                        <img src={BannerTitle} alt="banner" className=""></img>
                        <div className="calltoaction pos-relative">
                            <Link to="/waitinglobby" className="btn waves-effect waves-light btn-large pos-absolute btn-border btn-border-white">Play</Link>
                        </div>
                    </div>
                        <a className="btn-floating black pulse " href="#howToPlay"><i className="material-icons">arrow_downward</i></a>
                </section>

                { /*Information content */}
                <section>
                    <div className="row flex margin-0">
                        <main className="padding-0 col s12 l9">
                            {/* How To Play */}
                            <section id="howToPlay" className="section container-fluid scrollspy ">
                                <div className="row">
                                    <div className="col s12">
                                        <h4>How To Play</h4>
                                        {/* How To Play with step by step breakdown */}
                                        <div className="card padding-20">
                                            <table>
                                                <tr>
                                                    <td><span className="icon-number">1</span></td>
                                                    <td><b>** Registration Closed ** </b> || Register between <b>5<sup>th</sup> November - 10<sup>th</sup> November 11:59pm MST</b></td>
                                                </tr>
                                                <tr>
                                                    <td><span className="icon-number">2</span></td>
                                                    <td>Login on <b>11<sup>th</sup> November 2:00pm MST</b> with registered email address</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="icon-number">3</span></td>
                                                    <td>Answer <b>50 random  Ajooba Trivia questions</b> before the timer runs out!</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="icon-number">4</span></td>
                                                    <td>Wait for results</td>
                                                </tr>
                                                <tr>
                                                    <td><span className="icon-number">5</span></td>
                                                    <td>Finalists will move to <b>Live round on <a href="https://instagram.com/ajoobatrivia" className="color-primary">Instagram</a></b> on <a href="https://instagram.com/ajoobatrivia" className="color-primary txt-bold">Ajooba Trivia</a> instagram live feed</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section> {/* How To Play end */}
                            
                            <section id="points" className="section container-fluid scrollspy ">
                                <div className="row">
                                    <div className="col s12">
                                        <h4>Earning Points</h4>
                                        {/* How To Play with step by step breakdown */}
                                        <div className="card padding-20">
                                            <table>
                                                <tr>
                                                    <th rowspan="4"><span className="icon-number">1</span></th>
                                                    <th>Two rounds of Ajooba Trivia*</th>
                                                </tr>
                                                <tr>
                                                    <td>a) Round 1 consist of 55 Questions (5 Bonus Questions)</td>
                                                </tr>
                                                <tr>
                                                    <td>b) Round 2 consist of 25 Questions</td>
                                                </tr>
                                                <tr>
                                                    <td>*Each round will give 20 seconds to answer each question</td>
                                                </tr>

                                                {/* point 2 */}
                                                <tr>
                                                    <th rowspan="6"><span className="icon-number">2</span></th>
                                                    <th>Round 1 consist of:</th>
                                                </tr>
                                                <tr>
                                                    <td>a)&nbsp;&nbsp;20 simple questions – 1 point each</td>
                                                </tr>
                                                <tr>
                                                    <td>b)&nbsp;&nbsp;15 moderate level – 2 points each</td>
                                                </tr>
                                                <tr>
                                                    <td>c)&nbsp;&nbsp;15 Ajooba level questions – 3 points each</td>
                                                </tr>
                                                <tr>
                                                    <td>d)&nbsp;&nbsp; 5 Bonus questions**</td>
                                                </tr>
                                                <tr>
                                                    <td className="color-primary">&nbsp;&nbsp;**Bonus Questions will have 5 points each</td>
                                                </tr>

                                                {/* point 3 */}
                                                <tr>
                                                    <td><span className="icon-number">3</span></td>
                                                    <th>Bonus question appears after every 10 Questions in Round 1</th>
                                                </tr>
                                                {/* point 4 */}
                                                <tr>
                                                    <td><span className="icon-number">4</span></td>
                                                    <th>Round 2 consist of 25 Ajooba level questions</th>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Rules */}
                            <section id="rules" className="section container-fluid scrollspy ">
                                <div className="row">
                                    <div className="col s12">
                                        <h4>Rules and Regulations</h4>
                                        <div className="card padding-tb-20">
                                            <ol>
                                                <li>Fair play, no googling around.</li>
                                                <li>No collaboration with other players.</li>
                                                <li>No going back, once an answer has been submitted within the time frame, you will proceed to the next question. (* Refreshing the page will end the game – notify host immediately)</li>
                                                <li>Answer as many questions as possible in Round 1 to accumulate 50 points to reach Round 2</li>
                                                <li>Each question has 1 correct answer, choose wisely (Once answered will proceed to next question).</li>
                                                <li>The host will have the final say in all circumstances during play. </li>
                                                <li>Enjoy the game and just have fun!</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </section> {/* rules section end */}

                            {/* FAQ */}
                            <section id="faq" className="section container-fluid scrollspy">
                                <div className="row">
                                    <div className="col s12">
                                        <h4>Frequently Asked Questions (FAQs)</h4>
                                    </div>
                                    <div className="col s12">
                                        <ul className="collapsible">
                                            <li>
                                            <div><b>1. What if I disagree with the answers that the host has given to a particular question?</b></div> {/* Question */}
                                            <p><span>We can assure you that AjoobaTrivia organizers has put lot of effort into writing these questions with countless hours of research. No tricky, misleading or ambiguous questions will be asked. Our questions are 100% correct. The intent of this event is to provide engaging and entertainment questions that are accurate and concise. If you believe that the host has given an incorrect answer, or that your answer is also acceptable, please wait until the end of the round to discuss the issue. Approach the host politely and let them know your concern, explaining with proper facts and proof of justification for the argument. The host will take all this into consideration and try to settle in by validating and come up with a most favorable decision. Please do remember that the host will have the final say in all circumstances during play.</span></p> {/* Answer */}
                                            </li>
                                            <li>
                                            <div><b>2. I have accidently refreshed my webpage during the play or my internet is quite slow. What should I do?</b></div> {/* Question */}
                                            <p><span>Please ensure that you have a proper internet connection before proceeding to play. Ourwebsite has been developed with recent technologies to supportheavy usage. Also, do note refreshing the page while playing will disqualify you from the event. In case of server down, we apologize for the disruption. And we hope such technical difficulties won’t happen as our system will be thoroughly tested before deploying. In case, of refreshing accidently at the beginning of the event, immediately notify the organizers – Selva (012 247 5483) &amp; Alvin (017 387 2796).</span></p>{/* Answer */}
                                            </li>
                                            <li>
                                            <div><b>3. Will Round 1 be anonymous? And will the Round 1 scores be displayed publicly?</b></div> {/* Question */}
                                            <p><span>Yes, Round 1 will totally anonymous. Participants will still get certificates issued. Regarding the scores, only the contestants that qualified for Round 2 will be displayed.</span></p> {/* Answer */}
                                            </li>
                                            <li>
                                                <div><b>4. What time-zone will the event be played according?</b></div>
                                                <p><span> Event starts at 2 P.M. (MYT) on 11 th November, 2020. </span></p>
                                            </li>
                                            <li>
                                                <div><b>5. How to log in?</b></div>
                                                <p><span>Register at this website before 11th November. Login with registered details on the day of event and wait for the event to begin at 2 P.M. (MYT).</span></p>
                                            </li>
                                            <li>
                                                <div><b>6. How will Round 2 be conducted?</b></div>
                                                <p><span>Round 2 will be conducted live stream on Instagram.</span></p>
                                            </li>
                                            <li>
                                                <div><b>7. What type of questions will be asked?</b></div>
                                                <p><span>The questions will be on varying subject areas – General, Politics, Science, Sports etc – in no particular order of arrangement. Do not fret, the AjoobaTrivia questions were prepared to have fun.</span></p>
                                            </li>
                                            <li>
                                                <div><b>8. Any prizes awarded?</b></div>
                                                <p><span>All the participants will be issued certificates, and amazing prizes will be given out to the winners.</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section> {/* FAQ section end */}

                            {/* About */}
                            <section id="about" className="section container-fluid scrollspy ">
                                <div className="row">
                                    <div className="col s12">
                                        <h4 className="section-title">About Us</h4>
                                        <p>Ajooba Trivia is a fun and interactive trivia game organized by Bachelor's of IT (hons) students taking the MPU 3342 - Pengurusan Kokurikulum course from the Faculty of Engineering, Built Environment and Information Technology in SEGi University. It is a friendly event with the main purpose to educate and stimulate minds while having fun with your peers.</p>
                                    </div>
                                </div>
                                <div className="team-flex padding-bottom-20">
                                    <div className="cont">
                                        <img src={team1} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Selvadevan</h5>
                                        <h6 className="fontw-500 center-align">Project Manager</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team2} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Alvindren</h5>
                                        <h6 className="fontw-500 center-align">Deputy Project Manager</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team3} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Sarveen</h5>
                                        <h6 className="fontw-500 center-align">Secretary</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team4} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Mohamed Abdallah</h5>
                                        <h6 className="fontw-500 center-align">Vice Secretary</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team5} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Arvind Suresh</h5>
                                        <h6 className="fontw-500 center-align">Marketing Manager</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team6} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Dibakar Sutra Dhar</h5>
                                        <h6 className="fontw-500 center-align">Media and App Developer</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team7} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Nandita Dhanda</h5>
                                        <h6 className="fontw-500 center-align">Media and App Developer</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team8} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Asadur Rahman</h5>
                                        <h6 className="fontw-500 center-align">Content Manager</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team9} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Liang Hejiajian</h5>
                                        <h6 className="fontw-500 center-align">Content Manager</h6>
                                    </div>
                                    <div className="cont">
                                        <img src={team10} className="img-responsive z-depth-1"></img>
                                        <h5 className="fontw-500 center-align">Abdourahmane Dialo</h5>
                                        <h6 className="fontw-500 center-align">Content Manager</h6>
                                    </div>
                                </div> {/* team-flex div */}
                            </section> {/* about section end */}

                            {/* <ticky registration button - only visible on medium devices and below */}
                            <section className="sticky-registration container-fluid hide-on-large-only txt-center">
                                <Link to="/waitinglobby" className="btn btn-large btn-border btn-border-yellow">Play</Link>
                            </section>
                        </main>

                        {/* side menu  (desktops and large devices) */}
                        <aside className="col  l3 s12	" >
                            <div className="sticky-object">
                                <div className="hide-on-med-and-down">
                                    <ul className="  section table-of-contents" >
                                        <li><a href="#howToPlay">How To Play</a></li>
                                        <li><a href="#points">Earning Points</a></li>
                                        <li><a href="#rules">Rules</a></li>
                                        <li><a href="#faq">FAQ</a></li>
                                        <li><a href="#about">About Us</a></li>
                                    </ul>
                                    <Link to="/waitinglobby" className="btn btn-large btn-border btn-border-yellow margin-top-20">Play</Link>
                                </div>
                                <div className="card ">
                                    <div className="card-content ">
                                        <span className="card-title">Contact Us:</span>
                                        <p >Selvadevan</p>
                                        <a className="color-primary" href="tel:60 12-247 5483">+60 12-247 5483</a>
                                        <br />
                                        <p className="padding-top-10">Alvindren</p>
                                        <a className="color-primary" href="tel:60 17-387 2796">+60 17-387 2796</a>
                                    </div>
                                    <div className="card-action">
                                        <ul className="social-media">
                                            <li>Follow Us: &nbsp;</li>
                                            <li><a href="https://www.instagram.com/ajoobatrivia"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul> {/* social media icons */}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing;