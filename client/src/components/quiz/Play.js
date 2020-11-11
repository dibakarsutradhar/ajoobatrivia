import React, { Component } from 'react';
import isEmpty from 'is-empty';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import classnames from 'classnames';

import BannerTitle from '../../images/banner-title.png';

import questions from './finalQustions.json';

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
            time: {}
        };
        this.interval = null;
    }

    componentDidMount() {
        // const { questions, currentQuestion, nextQuestion } = this.state;
        this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
        this.startTimer();
        window.onbeforeunload = function() {
            return "Reloading this page will forfeit the game.";
         };
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

    handleNextButtonClick = () => {
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion);
            });
        }
    };

    handleQuitButtonClick = () => {
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/');
        }
    };

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
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
        const countDownTime = Date.now() + 1080000;
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
                        seconds,
                        distance
                    }
                });
            }
        }, 1000);
    };

    endGame = () => {
        alert('GAME OVER!!');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsQuestions: state.numberOfAnsQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers
        };
        setTimeout(() => {
            this.props.history.push('/summary', playerStats);
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
                <script type="text/javascript">
                    function preventBack() {
                        window.history.forward()
                    }
                    setTimeout("preventBack()", 0);
                    window.onunload = function() { null };
                </script>
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
                                    <div className="timer-container">
                                        <p>
                                            <span className="left" style={{ float: 'left' }}>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                                            <span className={classnames('right valid', {
                                                'warning': time.distance <= 120000,
                                                'invalid': time.distance < 30000
                                            })}>
                                                {time.minutes}:{time.seconds}
                                            <span  className="mdi mdi-clock-outline mdi-24px"></span></span>
                                        </p>
                                    </div>
                                        <div className="progress">
                                            <div className="determinate" style={{ 'width': '70%' }}></div>
                                        </div> {/* use js to update the progress. */}
                                        <form method="post" className="row" action="success.html">
                                            <h4 className="txt-center">{currentQuestion.question}</h4>
                                            <div className="col l6 s12 margin-bottom-0 margin-top-10">
                                                <p className="padding-top-5">
                                                    
                                                    <label className="margin-right-20">
                                                        <input name="group1" type="radio"  value ="yes"/>
                                                        <span onClick={this.handleOptionClick}><b>{currentQuestion.optionA}</b></span>
                                                    </label>
                                                    <label className="margin-right-20">
                                                        <input name="group1" type="radio" value="no" />
                                                        <span onClick={this.handleOptionClick}><b>{currentQuestion.optionB}</b></span>
                                                    </label>
                                                    <label className="margin-right-20">
                                                        <input name="group1" type="radio" value="no" />
                                                        <span onClick={this.handleOptionClick}><b>{currentQuestion.optionC}</b></span>
                                                    </label>
                                                    <label className="margin-right-20">
                                                        <input name="group1" type="radio" value="no" />
                                                        <span onClick={this.handleOptionClick}><b>{currentQuestion.optionD}</b></span>
                                                    </label>
                                                
                                                    {/*
                                                    <label className="input-field margin-right-20">
                                                        <input
                                                            className="btn waves-effect waves-light "
                                                            name="group1" type="button"
                                                            onClick={this.handleOptionClick} 
                                                            value={currentQuestion.optionA}
                                                        />
                                                    </label>
                                                    <label className="input-field margin-right-20">
                                                        <input
                                                            className="btn waves-effect waves-light "
                                                            name="group1" type="button"
                                                            onClick={this.handleOptionClick} 
                                                            value={currentQuestion.optionB}
                                                        />
                                                    </label>
                                                    <label className="input-field margin-right-20">
                                                        <input
                                                            className="btn waves-effect waves-light "
                                                            name="group1" type="button"
                                                            onClick={this.handleOptionClick} 
                                                            value={currentQuestion.optionC}
                                                        />
                                                    </label>
                                                    <label className="input-field margin-right-20">
                                                        <input
                                                            className="btn waves-effect waves-light"
                                                            name="group1" type="button"
                                                            onClick={this.handleOptionClick} 
                                                            value={currentQuestion.optionD}
                                                        />
                                                    </label>
                                                    */}
                                                </p>
                                            </div>
                                            <div className="input-field col s12 margin-bottom-0 txt-center">
                                                <span className="btn waves-effect waves-light btn-yellow " id="next-button" onClick={this.handleButtonClick}>Next
                                                </span>
                                            </div>
                                            <div className="input-field col s12 margin-bottom-0 txt-center">
                                                <span className="btn waves-effect waves-light btn-yellow " id="quit-button" onClick={this.handleButtonClick}>Quit
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </body>
        );
    }
}

export default Play;