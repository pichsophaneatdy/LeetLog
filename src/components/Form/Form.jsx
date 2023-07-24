import React from 'react'
import "./Form.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({
    code,
    setCode,
    question,
    setQuestion,
    date,
    setDate,
    solution,
    setSolution,
    duration,
    setDuration,
    setDifficulty,
    handleSubmit,
    success,
    formError
}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <p className="form__title">Save your leetcode question</p>
            {success && <p className="form__success">{success}</p>}
            {formError && <p className="form__error">{formError}</p>}
            {/* Code */}
            <div className="form__control">
                <label className="form__label">Code</label>
                <input value={code} onChange={(e)=>setCode(e.target.value)} type="number" placeholder='122' className="form__input" />
            </div>
            {/* Question */}
            <div className="form__control">
                <label className="form__label">Question</label>
                <input value={question} onChange={(e)=>setQuestion(e.target.value)} type="text" placeholder='Palindrome' className="form__input" />
            </div>
            {/* Difficulty */}
            <div className="form__radio-control">
                <p className="form__text">Difficulty</p>
                <input onChange={()=>setDifficulty("Easy")} type="radio" name="Difficulty" className="form__radio-input" value="Easy" />
                <label htmlFor="" className="form__radio-label">Easy</label>
                <input onChange={()=>setDifficulty("Medium")} type="radio" name="Difficulty" className="form__radio-input" value="Medium" />
                <label htmlFor="" className="form__radio-label">Meduim</label>
                <input onChange={()=>setDifficulty("Advanced")} type="radio" name="Difficulty" className="form__radio-input" value="Advanced" />
                <label htmlFor="" className="form__radio-label">Advanced</label>
            </div>
            {/* Date */}
            <div className="form__control">
                <label className="form__label">Completion Date</label>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
            {/* Solution */}
            <div className="form__control">
                <label className="form__label">Solution</label>
                <textarea value={solution} onChange={(e)=>setSolution(e.target.value)}  rows="7" type="text" placeholder="for(let i = 0; i < str.length; i++)" className="form__input form__textarea" />
            </div>
            {/* Minutes */}
            <div className="form__control">
                <label className="form__label">Time taken to complete (minutes)</label>
                <input value={duration} onChange={(e)=>setDuration(e.target.value)} type="number" placeholder="30" className="form__input" />
            </div>
            <div className="form__btn-container">
                <button className="form__btn">Save</button>
            </div>
        </form>
    )
}

export default Form
