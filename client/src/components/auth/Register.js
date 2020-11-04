import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="container">
                <section class="row">
                    <div class="col s12">
                        <h4 class="txt-center">Register</h4>
                        <div class="card margin-auto">
                            <div class="card-content">
                                <form method="post" class="row" action="success.html">
                                    <div class="input-field col  s12 margin-bottom-0">
                                        <input id="person_name" type="text" class="validate"/>
                                        <label for="person_name">Full Name</label>
                                    </div>
                                    <div class="input-field col l6 s12 margin-bottom-0">
                                        <input id="email_add" type="email" class="validate"/>
                                        <label for="email_add">Email</label>
                                    </div>
                                    <div class="input-field col l6 s12 margin-bottom-0">
                                        <input id="conf_email" type="text" class="validate"/>
                                        <label for="conf_email">Confirm Email</label>
                                    </div>
                                    <div class="col l6 s12 margin-bottom-0 margin-top-10">
                                        <p>Are you a SEGi Student?</p>
                                        <p class="padding-top-5">
                                        <label class="margin-right-20">
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
                                    <div class="input-field col l6 s12 margin-bottom-0">
                                        <input id="st_id" type="text" class="validate"/>
                                        <label for="st_id">Student ID</label>
                                    </div>
                                    <div class="input-field col s12 margin-bottom-0 txt-center">
                                        <button class="btn waves-effect waves-light btn-yellow " type="submit" name="action">Submit<i class="material-icons right">send</i>
                                        </button> {/* triggers model */}
                                    </div>
                                </form> {/* contact form end */}
                            </div> {/* card-content div close */}
                        </div> {/* card div close */}
                    </div>
                </section>
            </div>
        )
    }
}

export default Register;