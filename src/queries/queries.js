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
            code
            question
            difficulty
            date
            solution
            duration
    }
}`
const addNewQuestionMutation = gql `
    mutation AddBook($uid: ID!,$code: Int!, $question: String!, $duration: Int!, $solution: String!, $date: Float!, $difficulty: String!){
        addLeetcode(uid: $uid,code: $code, question: $question, duration: $duration, solution: $solution, date: $date, difficulty: $difficulty) {
            id,
            question
        }
    } 
`
export {getAllLeetcode, addNewQuestionMutation, getSingleLeetcode};