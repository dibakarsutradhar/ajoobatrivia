import React, { Component } from 'react';
import isEmpty from 'is-empty';
import M from 'materialize-css';

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
            score: prevState + 1,
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
            this.props.history.push('/');
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
        );
    }
}

export default Play;