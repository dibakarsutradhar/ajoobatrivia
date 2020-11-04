import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {registerUser } from '../../actions/authActions';

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <body className="subpage">
            <div className="main">
                <section class="banner-img valign-wrapper ">
                    <div class="banner-title">
                        <Link to="/">
                            <img src={BannerTitle} alt="Ajooba Trivia" class=""></img>
                        </Link> {/* redirect to home page */}
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
                                                className={classnames("", {invalid: errors.name})}
                                            />
                                            <label for="name">Full Name</label>
                                            <span className="red-text">{errors.name}</span>
                                        </div>
                                        <div className="input-field col  s12 margin-bottom-0">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                className={classnames("", {invalid: errors.email})}
                                            />
                                            <label for="email">Email</label>
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
                                            <label for="password">Password</label>
                                            <span className="red-text">{errors.password}</span>
                                        </div>
                                        <div className="input-field col  s12 margin-bottom-0">
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password2}
                                                error={errors.password2}
                                                id="password2"
                                                type="password"
                                                className={classnames("", {invalid: errors.password2})}
                                            />
                                            <label for="password2">Confirm Password</label>
                                            <span className="red-text">{errors.password2}</span>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));