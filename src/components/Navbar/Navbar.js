import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  px-5">
                <div className="container-fluid ">
              
                   <Link className="navbar-brand text-light" to="/">Todo Spot</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
               
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-light "  to="/myTodo">My Todo's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-light" to="/completedTasks">Completed Tasks</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link to='/calander' className="nav-link mx-3 text-light ">Calendar</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;