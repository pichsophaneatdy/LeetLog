import React, {useEffect} from 'react';
import "./DetailPage.scss";
import { useParams } from 'react-router-dom';
import { getSingleLeetcode } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import Hero from "../../components/Hero/Hero";
import leftIcon from "../../assets/left (1).png";
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";
import hljs from "highlight.js/lib/core";
import 'highlight.js/styles/default.css';
import DOMPurify from 'dompurify';

// Config JavaScript
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const DetailPage = () => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(getSingleLeetcode, {
        variables: {id}
    })
    const navigate = useNavigate();

    const newDate = new Date(data?.leetcode?.date).toString().split(" ").slice(1,4).join("/");

    useEffect(() => {
        // Highlight the code after the component mounts
        hljs.highlightAll();
    }, []);
    return (
        <div className="detail">
            <Hero title="Check out the detail!"/>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {
                data?.leetcode && (
                    <>
                        <div className="detail__header">
                            <motion.img 
                            onClick={()=>navigate("/home")}
                                whileHover={{scale: 1.15, transition: {duration: 0.3}}}
                                src={leftIcon} 
                                alt="" 
                                className="detail__icon" />
                            <p className="detail__header-title">Detail #{data.leetcode.code}</p>
                        </div>
                        <div className="detail__content">
                        {/* Heading */}
                        
                        <div className="detail__group">
                                <div className="detail__row">
                                    <p className="detail__title">Code</p>
                                    <p className="detail__info">{data.leetcode.code}</p>
                                </div>
                                <div className="detail__row">
                                    <p className="detail__title">Difficulty</p>
                                    <p className="detail__info">{data.leetcode.difficulty}</p>
                                </div>
                                <div className="detail__row">
                                    <p className="detail__title">Completion Date</p>
                                    <p className="detail__info">{newDate}</p>
                                </div>
                                <div className="detail__row">
                                    <p className="detail__title">Time taken to complete</p>
                                    <p className="detail__info">{data.leetcode.duration}</p>
                                </div>
                            </div>
                            <div className="detail__group2">
                                <p className="detail__title">Solution</p>
                                <pre>
                                <code
                                    className={`language-javascript`}
                                    dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(data?.leetcode?.solution),
                                    }}
                                />
                                </pre>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default DetailPage
