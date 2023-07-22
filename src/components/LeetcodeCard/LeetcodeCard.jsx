import React from 'react';
import "./LeetcodeCard.scss";
const LeetcodeCard = ({code, question, date, difficulty}) => {
    return (
        <div className="card">
            <p className="card__title">{code}</p>
            <p className="card__title">{question}</p>
            <p className="card__subtitle">{difficulty}</p>
            <p className="card__subtitle">{date}</p>
            <button className="card__detail">Detail</button>
        </div>
    )
}

export default LeetcodeCard
