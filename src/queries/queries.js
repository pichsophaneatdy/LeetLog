import {gql} from "@apollo/client";

const getAllLeetcode = gql`
    {
        leetcodes{
            id
            code
            question
            difficulty
            date
        }
    }
`
const addNewQuestionMutation = gql `
    mutation AddBook($code: Int!, $question: String!, $duration: Int!, $solution: String!, $date: Float!, $difficulty: String!){
        addLeetcode(code: $code, question: $question, duration: $duration, solution: $solution, date: $date, difficulty: $difficulty) {
            id,
            question
        }
    } 
`
export {getAllLeetcode, addNewQuestionMutation};