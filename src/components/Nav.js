import React from 'react';
import logo from '../assests/Logo.svg';
const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" />

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
