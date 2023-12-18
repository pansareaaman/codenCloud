import React from 'react';

import '../style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            {/* <img src={} alt="logo" /> */}
            <nav>
                <ul className='nav_links'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                    <li>
                        <Link to="/bill">Bill</Link>
                    </li>
                </ul>
            </nav>
            <a href="#">
                <button className='btn btn-primary'>
                    Login in
                </button>
            </a>
        </header>
    );
};

export default Navbar;