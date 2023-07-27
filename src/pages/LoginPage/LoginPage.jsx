import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.scss";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        
    }
    return (
        <div className="login">
            <h3 className="login__title">Login</h3>
            <form onSubmit={handleSubmit} className="login__form">
                <div className="form__control">
                    <label className="form__label">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='johndoe@gmail.com' className="form__input" />
                </div>
                <div className="form__control">
                    <label className="form__label">Password</label>
                    <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="text" placeholder="123Hello!" className="form__input" />
                </div>
                <div className="form__btn-container">
                    <button className="form__btn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
