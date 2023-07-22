import {gql} from "@apollo/client";

const getAllLeetcode = gql`
    {
        leetcodes{
            code
            question
            difficulty
            date
        }
    }
`
export {getAllLeetcode};