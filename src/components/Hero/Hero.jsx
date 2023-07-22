import React from 'react'
import code from "../../assets/code.png";
import "./Hero.scss";
const Hero = () => {
    return (
        <div className="hero">
            <img src={code} alt="" className="hero__icon" />
            <p className="hero__title">Welcome to LeetLog!</p>
            <p className="hero__subtitle">Did you do a lot of leetcode questions? We will help you keeping track of it!</p>
        </div>
    )
}

export default Hero
