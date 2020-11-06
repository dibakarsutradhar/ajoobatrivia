import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from 'classnames';

import BannerTitle from '../../images/banner-title.png';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userData);
    };

    render() {
        const { errors } = this.state;

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
                    <div className="container">
                        <section className="row">
                            <div className="col s12">
                                <h4 className="txt-center">Login</h4>
                                <div className="card margin-auto">
                                    <div className="card-content">
                                        <form noValidate onSubmit={this.onSubmit} className="row">
                                            <div className="input-field col  s12 margin-bottom-0">
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                    error={errors.email}
                                                    id="email"
                                                    type="email"
                                                    className={classnames("", {invalid: errors.email})}
                                                />
                                                <label htmlFor="email">* Email</label>
                                                <span className="red-text">{errors.email}</span>
                                            </div>
                                            <div className="input-field col  s12 margin-bottom-0">
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    type="password"
                                                    className={classnames("", {invalid: errors.password})}
                                                />
                                                <label htmlFor="password">* Password</label>
                                                <span className="red-text">{errors.password}</span>
                                            </div>
                                            <div className="input-field col s12 margin-bottom-0 txt-center">
                                                <button className="btn waves-effect waves-light btn-yellow " type="submit" name="action">Login<i className="material-icons right">send</i>
                                                </button> {/* triggers model */}
                                            </div>
                                        </form> {/* contact form end */}
                                    </div> {/* card-content div close */}
                                </div> {/* card div close */}
                            </div>
                        </section>
                    </div>
                </div>
            </body>
        );
    }
}

export default Login;