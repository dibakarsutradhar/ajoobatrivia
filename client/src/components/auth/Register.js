import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BannerTitle from '../../images/banner-title.png';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    };

    render() {
        const { errors } = this.state;

        return (
            <body className="subpage">
            <div className="main">
                <section class="banner-img valign-wrapper ">
                    <div class="banner-title">
                        <a href="home.html">
                            <img src={BannerTitle} alt="Ajooba Trivia" class=""></img>
                        </a> {/* redirect to home page */}
                    </div>
                </section> {/* main banner end */}
                <div className="container">
                    <section className="row">
                        <div className="col s12">
                            <h4 className="txt-center">Register</h4>
                            <div className="card margin-auto">
                                <div className="card-content">
                                    <form noValidate onSubmit={this.onSubmit} className="row">
                                        <div className="input-field col  s12 margin-bottom-0">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                error={errors.name}
                                                id="name"
                                                type="text"
                                            />
                                            <label for="name">Full Name</label>
                                        </div>
                                        <div className="input-field col  s12 margin-bottom-0">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                            />
                                            <label for="email">Email</label>
                                        </div>
                                        <div className="input-field col  s12 margin-bottom-0">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                id="password"
                                                type="password"
                                            />
                                            <label for="password">Password</label>
                                        </div>
                                        <div className="input-field col  s12 margin-bottom-0">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password2}
                                                error={errors.password2}
                                                id="password2"
                                                type="password"
                                            />
                                            <label for="password2">Confirm Password</label>
                                        </div>
                                        <div className="col l6 s12 margin-bottom-0 margin-top-10">
                                            <p>Are you a SEGi Student?</p>
                                            <p className="padding-top-5">
                                            <label className="margin-right-20">
                                                <input name="group1" type="radio"  value ="yes"/>
                                                <span>Yes</span>
                                            </label>
                                            <label>
                                                <input name="group1" type="radio" value="no" />
                                                <span>No</span>
                                            </label>
                                            </p>
                                        </div>

                                        {/* add condition */}
                                        <div className="input-field col l6 s12 margin-bottom-0">
                                            <input id="st_id" type="text" className="validate"/>
                                            <label for="st_id">Student ID</label>
                                        </div>
                                        <div className="input-field col s12 margin-bottom-0 txt-center">
                                            <button className="btn waves-effect waves-light btn-yellow " type="submit" name="action">Submit<i class="material-icons right">send</i>
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
        )
    }
}

export default Register;