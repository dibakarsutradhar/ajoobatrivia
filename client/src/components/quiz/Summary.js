import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

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
                numberOfQustions: state.numberOfQustions,
                numberOfAnsQustions: state.numberOfAnsQustions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers
            });
        }
    };


    render() {
        const { state } = this.props.location;
        let stats;
        let remark;
        const userScore = this.state.score;

        if (userScore < 10) {
            remark = 'Better luck next time!';
        } else if (userScore >= 11) {
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
                    <h1>Quiz has Ended!</h1>
                    <div className="container stats">
                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="right">{this.state.numberOfAnsQuestions}</span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right">{this.state.wrongAnswers}</span>
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/">Back to Home</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        
        return (
            <div className="quiz-summary">
                {stats}
            </div>
        )
    }
};

export default Summary;