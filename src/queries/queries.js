import {gql} from "@apollo/client";

const getAllLeetcode = gql`
    query GetAllLeetcode($uid: ID!){
        leetcodes(uid: $uid){
            id
            code
            question
            difficulty
            date
        }
    }
`
const getSingleLeetcode = gql`
    query GetSingleLeetcode($id: ID!){
        leetcode(id: $id){
            id
            code
            question
            difficulty
            date
            solution
            duration
    }
}`
const addNewQuestionMutation = gql `
    mutation AddLeetcode($uid: ID!,$code: Int!, $question: String!, $duration: Int!, $solution: String!, $date: Float!, $difficulty: String!){
        addLeetcode(uid: $uid,code: $code, question: $question, duration: $duration, solution: $solution, date: $date, difficulty: $difficulty) {
            id,
            question
        }
    } 
`
const deleteLeetcodeMutation = gql `
    mutation DeleteLeetcode($id: ID!) {
        deleteLeetcode(id: $id) {
            code
            question
        }
    }
`
export {getAllLeetcode, addNewQuestionMutation, getSingleLeetcode, deleteLeetcodeMutation};