import React, { Component, Fragment } from 'react';
import isEmpty from 'is-empty';

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
    }

    componentDidMount() {
        const { questions, currentQuestion, nextQuestion } = this.state;
        this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion);
    };

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
                answer
            });
        }
    };

    render() {
        const { currentQuestion } = this.state;

        return (
            <Fragment>
                <div className="questions">
                    <div className="lifeline-container">
                        <p>
                            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>2 
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>1 of 50</span>
                            20<span className="mdi mdi-clock-outline mdi-24px"></span>
                        </p>
                    </div>
                    <h5>{currentQuestion.question}</h5>
                    <div className="options-container">
                        <p className="option">{currentQuestion.optionA}</p>
                        <p className="option">{currentQuestion.optionB}</p>
                    </div>
                    <div className="options-container">
                        <p className="option">{currentQuestion.optionC}</p>
                        <p className="option">{currentQuestion.optionD}</p>
                    </div>

                    <div className="button-container">
                        <button>Next</button>
                        <button>Quit</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Play;