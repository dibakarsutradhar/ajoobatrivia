import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import BannerTitle from '../../images/banner-title.png';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQustions: 0,
            numberOfAnsQustions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
        };
    }

    componentDidMount() {
        const { state } = this.props.location;
        if(state) {
            this.setState({
                score: state.score,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsQuestions: state.numberOfAnsQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers
            });
        }
    };


    render() {
        const { state } = this.props.location;
        let stats;
        let button;
        let remark;
        const userScore = this.state.score;

        if (userScore < 45) {
            remark = 'Better luck next time!';
        } else if (userScore >= 46) {
            remark = 'You are an absolute legend. Welcome to Round 2!';
        } else {
            remark = 'We all hit duck sometimes';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <span className=""></span>
                    </div>
                    <h4 className="txt-center">Quiz has Ended!</h4>
                    <div className="container stats">
                        <h5 className="txt-center">{remark}</h5>
                        <h2 className="txt-center">Your Score: {this.state.score.toFixed(0)}</h2>

                        <span className="stat left">Total number of questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="right">{this.state.numberOfAnsQuestions}</span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right">{this.state.wrongAnswers}</span>
                    </div>
                </Fragment>
            );
            if(userScore >= 46) {
                button = (
                    <div className="container stats">
                        <div className="txt-center width-100 margin-top-20 card-content">
                            <Link to="https://discord.gg/ZjsMpAt8MY" className="btn waves-effect btn-yellow ">Go to Round 2</Link>
                        </div>
                    </div>
                )
            } else {
                button = (
                    <div className="container stats">
                        <div className="txt-center width-100 margin-top-20 card-content">
                            <Link to="/" className="btn waves-effect btn-yellow ">Go to Home</Link>
                        </div>
                    </div>
                )
            }
        } else {
            stats = (
                <section>
                    <h4 className="txt-center">No Statistics Available</h4>
                    <div className="txt-center width-100 margin-top-20">
                        <Link to="/" className="btn waves-effect btn-yellow ">Go to Home</Link>
                    </div>
                </section>
            );
        }
        
        return (
            <body className="subpage">
                <div className="main">
                    <section className="banner-img valign-wrapper ">
                        <div className="banner-title">
                            <Link to="/">
                                <img src={BannerTitle} alt="Ajooba Trivia" className=""></img>
                            </Link> {/* redirect to home page */}
                        </div>
                    </section>
                    <main className="container">
                        <section className="row">
                            <div className="col s12">
                                <br/><br/>
                                <div className="card margin-auto">
                                    <div className="card-content">
                                        {stats}
                                        {button}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </body>
        )
    }
};

export default Summary;