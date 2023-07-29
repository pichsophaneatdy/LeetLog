import React from 'react'
import logo from "../../assets/logo.png";
import "./UserForm.scss";
import { Link } from 'react-router-dom';
const UserForm = ({handleSubmit, errMsg, btn,email, setEmail, pwd, setPwd, title, subtitle, successMsg}) => {
    return (
        <div className="user-form">
            <div className="user-form__header">
                <img src={logo} alt="" className="user-form__header__logo" />
                <h3 className="user-form__title">{title}</h3>
                <p className="user-form__subtitle">{subtitle}</p>
            </div>
            <form onSubmit={handleSubmit} className="user-form__form">
                {errMsg && <p className="form__error">{errMsg}</p>}
                {successMsg && <p className="form__success">{successMsg}</p>}
                <div className="form__control">
                    <label className="form__label">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='johndoe@gmail.com' className="form__input" />
                </div>
                {
                    setPwd && (
                        <div className="form__control">
                            <label className="form__label">Password</label>
                            <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="password" placeholder="123Hello!" className="form__input" />
                            {btn === "Login" && (
                                <div className="user-form__container">
                                    <Link to="/resetPwd" className="user-form__text">
                                        Forget password
                                    </Link>
                                </div>     
                            )}
                        </div>
                    )
                }
                <div className="form__btn-container">
                    <button className="form__btn">{btn}</button>
                </div>
                {
                    setPwd && (btn === "Login" ? (
                        <p className="user-form__text2">
                            Don't have an account? <Link className="user-form__link" to="/register">Register</Link>
                        </p>
                    ) : (
                        <p className="user-form__text2">
                            Already have an account? <Link className="user-form__link" to="/">Login</Link>
                        </p>
                    ))
                }
                <p className="user-form__text2"></p>
            </form>
        </div>
    )
}

export default UserForm
