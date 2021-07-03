import React from 'react'
import BrandLogo from "../images/logo.jpg"
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
        <div className="header_area">
            <div className="container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={BrandLogo} alt="logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    <i class="fas fa-bars"></i>
                    </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"> 
                            <NavLink exact className="nav-link" activeClassName="menu_active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item"> 
                            <NavLink className="nav-link" activeClassName="menu_active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item"> 
                            <NavLink className="nav-link" activeClassName="menu_active" to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item"> 
                            <NavLink className="nav-link" activeClassName="menu_active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
        </div>
        </>
    )
}
