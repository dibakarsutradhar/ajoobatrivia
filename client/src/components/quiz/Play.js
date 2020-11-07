import React, { Component, Fragment } from 'react';

class Play extends Component {
    constructor() {
        super();
    }

    increaseCount = () => {
        this.setState({
            counter: 5
        });
    }

    render() {
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
                    <h5>Question 1</h5>
                    <div className="options-container">
                        <p className="option">Answer A</p>
                        <p className="option">Answer B</p>
                    </div>
                    <div className="options-container">
                        <p className="option">Answer C</p>
                        <p className="option">Answer D</p>
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