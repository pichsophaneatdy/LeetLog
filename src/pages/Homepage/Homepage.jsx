import React, {useEffect, useState} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase";
import Hero from '../../components/Hero/Hero';
import LeetcodeCard from '../../components/LeetcodeCard/LeetcodeCard';
import { useQuery } from '@apollo/client';
import { getAllLeetcode } from '../../queries/queries';
import { useNavigate } from 'react-router-dom';
import "./Homepage.scss";

const Homepage = () => {
    const {loading, error, data} = useQuery(getAllLeetcode);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid)
            } else {
                console.log("user is logged out")
            }
        });
    }, [])
    return (
        <div className="homepage">
            <Hero title="Welcome to LeetLog!" subtitle="Did you do a lot of leetcode questions? We will help you keeping track of it!" />
            <div className="homepage__container">
                {loading && <p>Loading...</p>}
                {error && <p>Error...</p>}
                {
                    data?.leetcodes?.map((question) => {
                        return <LeetcodeCard key={question._id} card={question} />
                    })
                }
            </div>
        </div>
    )
}

export default Homepage
