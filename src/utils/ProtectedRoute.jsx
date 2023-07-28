import {Navigate} from "react-router-dom";
import firebase from "../firebase";
import "firebase/app";

const ProtectedRoute = ({children}) => {
    const user = firebase.auth().currentUser;
    if(!user) {
        return <Navigate to="/" />
    }
    return children;
}

export default ProtectedRoute
