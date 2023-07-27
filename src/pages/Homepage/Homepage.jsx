import React, {useEffect} from 'react';
import Hero from '../../components/Hero/Hero';
import LeetcodeCard from '../../components/LeetcodeCard/LeetcodeCard';
import { useQuery } from '@apollo/client';
import { getAllLeetcode } from '../../queries/queries';
import { useLocation } from 'react-router-dom';
import "./Homepage.scss";

const Homepage = () => {
    const {loading, error, data} = useQuery(getAllLeetcode);
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
