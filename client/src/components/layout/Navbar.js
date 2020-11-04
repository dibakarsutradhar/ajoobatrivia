/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
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