import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light px-5">
                <div className="container-fluid ">
              
                   <a className="navbar-brand" href="/">Todo Spot</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
               
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link "  href="/">My Todo's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Completed Tasks</a>
                            </li>
                           
                            <li className="nav-item">
                                <a href='/' className="nav-link ">Calendar</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;