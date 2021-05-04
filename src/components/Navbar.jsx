import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () =>{
    return(
        <>
            <div className="Navbar">
            <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <img src={logo} alt="" className="navbar-logo"/>
                    <button className="navbar-btn btn btn-outline-secondary">Login</button>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar;