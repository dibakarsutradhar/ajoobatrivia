/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
                <nav>
                    <div className="nav-wrapper container-fluid">
                        <ul className="social-media">
                            <li>Follow Us: </li>
                            <li><a href="https://www.instagram.com/ajoobatrivia"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;