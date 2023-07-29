import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.scss";
import UserForm from '../../components/UserForm/UserForm';
import logo from "../../assets/logo.png";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(`${errorCode.toString()}: ${errorMessage.toString()}`);
                // Display error on the form and allow user to sign in again
                setTimeout(() => {
                    setErrMsg("");
                    setEmail("");
                    setPwd("");
                }, 2500)
            });
        
    }
    return (
            <UserForm 
                title="Welcome back to LeetLog!" 
                subtitle="Welcome back! Please enter your details." 
                handleSubmit={handleSubmit}
                errMsg={errMsg}
                email={email}
                setEmail={setEmail}
                pwd={pwd}
                setPwd={setPwd}
                btn="Login"
            />
    )
}

export default LoginPage
