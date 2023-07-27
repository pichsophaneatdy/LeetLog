import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import "./RegisterPage.scss";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                // Signed In
                const user = userCredential.user;
                console.log(user);
                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }
    return (
        <div className="register">
            <h3 className="register__title">Register</h3>
            <form onSubmit={handleSubmit} className="register__form">
                <div className="form__control">
                    <label className="form__label">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='johndoe@gmail.com' className="form__input" />
                </div>
                <div className="form__control">
                    <label className="form__label">Password</label>
                    <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="text" placeholder="123Hello!" className="form__input" />
                </div>
                <div className="form__btn-container">
                    <button className="form__btn">Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
