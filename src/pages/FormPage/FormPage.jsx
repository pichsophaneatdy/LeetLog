import React from 'react';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import {useState} from "react";
import {useMutation} from "@apollo/client";
import { addNewQuestionMutation } from '../../queries/queries';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
    const [code, setCode] = useState();
    const [question, setQuestion] = useState();
    const [date, setDate] = useState(new Date());
    const [solution, setSolution] = useState();
    const [duration, setDuration] = useState();
    const [difficulty, setDifficulty] = useState();

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
    const [addLeetcode, {data, loading, error}] = useMutation(addNewQuestionMutation);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let timestamp = date.getTime();
        let newCode = Number(code);
        let newDuration = Number(duration);

        addLeetcode({
            variables: {
                code: newCode, question, date: timestamp, solution, duration: newDuration, difficulty
            }
        }).then((response) => {
            clearInputValue();
            setSuccess("Successfully uploaded your question");
            setTimeout(() => {
                navigate("/");
            }, 2500)
        }).catch((error) => {
            clearInputValue();
            setFormError("Unable to upload your question at the moment");
            setTimeout(() => {
                setFormError("");
            }, 2500)
        })
    } 
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
