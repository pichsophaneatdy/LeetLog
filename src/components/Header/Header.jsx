import React from 'react';
import "./Header.scss";
import menu from "../../assets/hamburger_menu.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                Leetcode Archives
            </Link>
            <p className="header__logo">LEETLOG</p>
            <img src={menu} className="header__menu" alt="Hamburger Menu" />
            <Link to="/addNewLeetcode" className="header__link">
                Add new leetcode
            </Link>
        </header>
    )
}

export default Header
