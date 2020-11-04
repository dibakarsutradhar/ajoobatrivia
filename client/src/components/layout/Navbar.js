import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div class="nav-wrapper container-fluid">
		      	<ul class="social-media">
		      		<li>Follow Us: </li>
                    <li><Link to="https://www.instagram.com/ajoobatrivia/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
                </ul>
		    </div>
        )
    }
}

export default Navbar;