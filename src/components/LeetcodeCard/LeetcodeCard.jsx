import React from 'react';
import "./LeetcodeCard.scss";
import { Link } from 'react-router-dom';
const LeetcodeCard = ({card}) => {
    const {id,code, question, date, difficulty} = card;
    const newDate = new Date(date).toString().split(" ").slice(1,4).join("/");
    
    return (
        <div className="card">
            <p className="card__title">#{code}</p>
            <p className="card__title">{question}</p>
            <div className="card__group">
                <p className="card__subtitle">Difficulty: {difficulty}</p>
                <p className="card__subtitle">Date: {newDate}</p>
            </div>
            <div className="card__container">
                <Link to={`/leetcode/${id}`} className="card__detail">Learn more</Link>
            </div>
            
        </div>
    )
}

export default LeetcodeCard
