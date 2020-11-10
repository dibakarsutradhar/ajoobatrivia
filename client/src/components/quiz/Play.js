import React, { Component } from 'react';
import isEmpty from 'is-empty';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import BannerTitle from '../../images/banner-title.png';

import questions from './qustions.json';

class Play extends Component {
    constructor() {
        super();
        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            time: {}
        };
        this.interval = null;
    }

    componentDidMount() {
        // const { questions, currentQuestion, nextQuestion } = this.state;
        this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
        this.startTimer();
    };

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    displayQuestions = (
        questions = this.state.questions,
        currentQuestion,
        nextQuestion
    ) => {
        const { currentQuestionIndex } = this.state;
        if(!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            const answer = currentQuestion.answer;
            
            this.setState({
                currentQuestion,
                nextQuestion,
                numberOfQuestions: questions.length,
                answer
            });
        }
    };

    handleOptionClick = (e) => {
        if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
        }
    };

    correctAnswer = () => {
        M.toast({
            html: 'Correct Answer!',
            classes: 'toast-valid',
            displayLength: 1500
        });

        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsQuestions: prevState.numberOfAnsQuestions + 1
        }), () => {
            if(this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
            };
        });
    };

    wrongAnswer = () => {
        navigator.vibrate(1000);

        M.toast({
            html: 'Wrong Answer!',
            classes: 'toast-invalid',
            displayLength: 1500
        });

        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsQuestions: prevState.numberOfAnsQuestions + 1
        }), () => {
            if(this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
            };
        });
    };

    startTimer = () => {
        const countDownTime = Date.now() + 300000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60)) / 1000;

            if(distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                });
            }
        }, 1000);
    };

    endGame = () => {
        alert('Game has ended !');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsQuestions: state.numberOfAnsQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers
        };
        console.log(playerStats);
        setTimeout(() => {
            this.props.history.push('/Summary', playerStats);
        }, 1000);
    };

    render() {
        const { 
            currentQuestion,
            currentQuestionIndex,
            numberOfQuestions,
            time
        } = this.state;

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
                                <br />
                                <div className="card margin-auto margin-top-0" style={{ 'max-width': '600px' }}>
                                    <div className="card-content">
                                        <div className="progress">
                                            <div className="determinate" style={{ 'width': '70%' }}></div>
                                        </div> {/* use js to update the progress. */}
                                        <div>
                                            <p className="txt-right">timer</p>
                                        </div>
                                        <form method="post" className="row" action="success.html">
                                            <h4 className="txt-center">{currentQuestion.question}</h4>
                                            <div className="col l6 s12 margin-bottom-0 margin-top-10">
                                                <p className="padding-top-5">
                                                <label className="margin-right-20">
                                                    <input onClick={this.handleOptionClick} name="group1" type="radio"  value ="yes"/>
                                                    <span>{currentQuestion.optionA}</span>
                                                </label>
                                                <label className="margin-right-20">
                                                    <input onClick={this.handleOptionClick} name="group1" type="radio" value="no" />
                                                    <span>{currentQuestion.optionB}</span>
                                                </label>
                                                <label className="margin-right-20">
                                                    <input onClick={this.handleOptionClick} name="group1" type="radio" value="no" />
                                                    <span>{currentQuestion.optionC}</span>
                                                </label>
                                                <label className="margin-right-20">
                                                    <input onClick={this.handleOptionClick} name="group1" type="radio" value="no" />
                                                    <span>{currentQuestion.optionD}</span>
                                                </label>
                                                </p>
                                            </div>
                                            <div className="input-field col s12 margin-bottom-0 txt-center">
                                                <button className="btn waves-effect waves-light btn-yellow " type="submit" name="action">Next
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                
                    <div className="questions">
                        <div>
                            <p>
                                <span>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                                <span className="right">{time.minutes}:{time.seconds}</span>
                            </p>
                        </div>
                        <h5>{currentQuestion.question}</h5>
                        <div className="options-container">
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                        </div>
                        <div className="options-container">
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                        </div>
                    </div>
            </body>
        );
    }
}

export default Play;