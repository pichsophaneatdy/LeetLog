import React from 'react';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import {useState, useEffect} from "react";
import {auth} from "../../firebase";
import {useMutation} from "@apollo/client";
import { addNewQuestionMutation } from '../../queries/queries';
import { getAllLeetcode } from '../../queries/queries';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const FormPage = () => {
    const [code, setCode] = useState();
    const [question, setQuestion] = useState();
    const [date, setDate] = useState(new Date());
    const [solution, setSolution] = useState();
    const [duration, setDuration] = useState();
    const [difficulty, setDifficulty] = useState();
    const [uid, setUid] = useState("");
    // Success or Fail Status
    const [success, setSuccess] = useState("");
    const [formError, setFormError] = useState("");

    const clearInputValue = () => {
        setCode("");
        setQuestion("");
        setSolution("");
        setDuration("");
        setDifficulty("");
    }

    // GraphQL
    const [addLeetcode, {data, loading, error}] = useMutation(addNewQuestionMutation, {
        refetchQueries: [
            {
                query: getAllLeetcode,
                variables: {uid}
            }
        ]
    });

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log(uid)
        e.preventDefault();
        let timestamp = date.getTime();
        let newCode = Number(code);
        let newDuration = Number(duration);
        addLeetcode({
            variables: {
                uid,code: newCode, question, date: timestamp, solution, duration: newDuration, difficulty
            }
        }).then((response) => {
            clearInputValue();
            setSuccess("Successfully uploaded your question");
            setTimeout(() => {
                navigate("/home");
            }, 2500)
        }).catch((error) => {
            clearInputValue();
            setFormError("Unable to upload your question at the moment");
            setTimeout(() => {
                setFormError("");
            }, 2500)
        })
    } 
        // useEffect 
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                const uid = user.uid;
                setUid(uid);
                } else {
                    navigate("/");
                }
                })
        }, [])
    return (
        <div className="formPage">
            <Hero title="Keep track of your leetcode questions!"/>
            <Form
                code={code}
                setCode={setCode}
                question={question}
                setQuestion={setQuestion}
                date={date}
                setDate={setDate}
                solution={solution}
                setSolution={setSolution}
                duration={duration}
                setDuration={setDuration}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                handleSubmit={handleSubmit}
                success={success}
                formError={formError}
            />
        </div>
    )
}

export default FormPage
