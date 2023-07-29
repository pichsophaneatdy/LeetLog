import React, {useState} from 'react'
import UserForm from '../../components/UserForm/UserForm';
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const ResetPwdPage = () => {
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {   
        e.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccessMsg("Reset password email has been sent.");
                setTimeout(() => {
                    navigate("/");
                }, 2000)
            })
            .catch((error) => {
                setErrMsg(error.code.toString(), error.message.toString());
            })
    }
    return (
        <UserForm
            handleSubmit={handleSubmit}
            title="We will help you reset the p"
            subtitle="Please enter your email below"
            btn="Reset password"
            successMsg={successMsg}
            email={email}
            setEmail={setEmail}
        />
    )
}

export default ResetPwdPage
