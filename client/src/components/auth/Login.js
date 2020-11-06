import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            // Push user to dashboard when they login
            this.props.history.push("/dashboard");
        }

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

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
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
                                                    className={classnames("", {invalid: errors.email || errors.emailnotfound})}
                                                />
                                                <label htmlFor="email">Email</label>
                                                <span className="red-text">
                                                    {errors.email}
                                                    {errors.emailnotfound}
                                                </span>
                                            </div>
                                            <div className="input-field col  s12 margin-bottom-0">
                                                <input
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    type="password"
                                                    className={classnames("", {invalid: errors.password || errors.paswordincorrect})}
                                                />
                                                <label htmlFor="password">Password</label>
                                                <span className="red-text">
                                                    {errors.password}
                                                    {errors.passwordincorrect}
                                                </span>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);