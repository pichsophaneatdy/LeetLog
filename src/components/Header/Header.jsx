import React, {useEffect, useState} from 'react';
import "./Header.scss";
import menu from "../../assets/hamburger_menu.png";
import { Link } from 'react-router-dom';
import closeBtn from "../../assets/close.png";
import {motion} from "framer-motion";

const Header = ({isMobileHeaderOpen, setIsMobileHeaderOpen}) => {
    // menu variants
    const variants = {
        open: { opacity: 1, x: 0 ,
            transition: {
            stiffness: 20,
            duration: 0.5
        } },
        closed: { opacity: 0, x: "100%", type: "spring", transition: {
            stiffness: 20,
            duration: 0.5
        } },
    }
    return (
        <>
            {
                isMobileHeaderOpen && (
                    <motion.header
                        initial={false}
                        animate={isMobileHeaderOpen ? "open" : "closed"}
                        variants={variants}
                        className="header__mobile"
                    >
                        <motion.img 
                            whileHover={{scale: 1.2, transition: {duration: 0.5}}}
                            onClick={()=>setIsMobileHeaderOpen(false)} 
                            src={closeBtn} 
                            className="header__mobile__icon" 
                            alt="Cross Icon"/>
                        <nav className="header__mobile__nav">
                            <Link onClick={()=> setIsMobileHeaderOpen(false)} to="/" className="header__mobile__link">
                                <p className="header__mobile__text">01</p>
                                <p className="header__mobile__text">Leetcode Archives</p>
                            </Link>
                            <Link onClick={()=> setIsMobileHeaderOpen(false)} to="/addNewLeetcode" className="header__mobile__link">
                                <p className="header__mobile__text">02</p>
                                <p className="header__mobile__text">Add new leetcode</p>
                            </Link>
                        </nav>
                    </motion.header>
                )
            }
            <header className="header">
                <Link to="/" className="header__link">
                    Leetcode Archives
                </Link>
                <Link to="/" className="header__logo">LEETLOG</Link>
                <motion.img 
                    whileHover={{scale: 1.2, transition: {duration: 0.5}}}
                    onClick={()=>setIsMobileHeaderOpen(true)} 
                    src={menu} 
                    className="header__menu" 
                    alt="Hamburger Menu" 
                />
                <Link to="/addNewLeetcode" className="header__link">
                    Add new leetcode
                </Link>
            </header>
        </>
        
    )
}

export default Header
