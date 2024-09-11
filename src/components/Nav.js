import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
