

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // addevent listner
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })
    return <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* header starts here */}
        <div className={`header-top d-md-none   ${socialToggle ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className="lab-btn me-3">Create account</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>

        {/*header bottom */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/*Logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>

                    {/* Menu area */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/*sign-in and login */}

                        <Link to=".sign-up" className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                        <Link to="/login" className=" d-none d-md-block">Login</Link>

                        {/*menu toggler */}
                        <div onClick={(()=> setMenuToggle(!menuToggle))} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* social Toggler */}
                       <div className="ellepsis-bar d-md-none" onClick={()=> {setSocialToggle(!socialToggle)}}>
                         <i className="icofont-info-square"></i>
                       </div>

                    </div>
                </div>
            </div>
        </div>

    </header>
}

export default NavItems;