import React from 'react'
import code from "../../assets/code.png";
import "./Hero.scss";
const Hero = ({title, subtitle}) => {
    return (
        <div className="hero">
            <img src={code} alt="" className="hero__icon" />
            {title && <p className="hero__title">{title}</p>}
            {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        </div>
    )
}

export default Hero
