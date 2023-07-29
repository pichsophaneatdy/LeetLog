import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import "./RegisterPage.scss";
import UserForm from '../../components/UserForm/UserForm';
const RegisterPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                // Signed In
                const user = userCredential.user;
                console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode.toString(), errorMessage.toString());
                setTimeout(() => {
                    setErrMsg("");
                    setEmail("");
                    setPwd("");
                }, 2500)
            })
    }
    return (
        <UserForm 
            title="Welcome to LeetLog!" 
            subtitle="We are excited to have you. Please enter your details" 
            handleSubmit={handleSubmit}
            errMsg={errMsg}
            email={email}
            setEmail={setEmail}
            pwd={pwd}
            setPwd={setPwd}
            btn="Register"
        />
    )
}

export default RegisterPage
