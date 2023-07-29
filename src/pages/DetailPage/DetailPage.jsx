import React, {useEffect, useState} from 'react';
import "./DetailPage.scss";
import { useParams } from 'react-router-dom';
import { getSingleLeetcode } from '../../queries/queries';
import { deleteLeetcodeMutation } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import Hero from "../../components/Hero/Hero";
import leftIcon from "../../assets/left (1).png";
import { useNavigate } from 'react-router-dom';
import {motion, useMotionTemplate} from "framer-motion";
import hljs from "highlight.js/lib/core";
import 'highlight.js/styles/default.css';
import DOMPurify from 'dompurify';
import deleteIcon from "../../assets/icons8-delete-48.png";
import { useMutation } from '@apollo/client';
import { getAllLeetcode } from '../../queries/queries';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "../../firebase";


// Config JavaScript
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const DetailPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uid, setUid] = useState("");
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
    // Handle Delete Leetcode
    const [deleteLeetcode, {data: deleteData, loading: deleteLoading, error: deleteError}] = useMutation(deleteLeetcodeMutation, {
        refetchQueries: [
            {
                query: getAllLeetcode,
                variables: {uid}
            }
        ]
    })
    const handleDelete = (e) => {
        e.preventDefault();
        deleteLeetcode({
            variables: {
                id: data.leetcode.id
            }
        })
            .then(() => {
                setIsModalOpen(false);
                navigate("/home");
            })
            .catch((error) => {
                console.log(error);
                setIsModalOpen(false);
                navigate("/home");
            })
    }
    return (
        <div className="detail">
            {/* Delete Modal */}
            {
                isModalOpen && (
                    <div className="detail__modal">
                        <div className="modal__content">
                            <p className="modal__text">Are you sure you want to delete leetcode?</p>
                            <div className="modal__container">
                                <button onClick={(e)=>handleDelete(e)} className="modal__delete-btn">Delete</button>
                                <button onClick={()=>setIsModalOpen(false)} className="modal__goback-btn">Go back</button>
                            </div>
                            
                        </div>
                    </div>
                )

            }
            <Hero title="Check out the detail!"/>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}
            {
                data?.leetcode && (
                    <>
                        <div className="detail__header-container">
                            <div className="detail__header">
                                <motion.img 
                                onClick={()=>navigate("/home")}
                                    whileHover={{scale: 1.15, transition: {duration: 0.3}}}
                                    src={leftIcon} 
                                    alt="" 
                                    className="detail__icon" />
                                <p className="detail__header-title">Detail #{data.leetcode.code}</p>
                            </div>
                            <img onClick={()=>setIsModalOpen(true)} src={deleteIcon} alt="" className="detail__delete-icon" />
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
