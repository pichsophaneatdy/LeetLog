import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0R_8jWbT7HKPR-GJqZanP9xeFDe0Fpag",
    authDomain: "leetlog-2023.firebaseapp.com",
    projectId: "leetlog-2023",
    storageBucket: "leetlog-2023.appspot.com",
    messagingSenderId: "454596671782",
    appId: "1:454596671782:web:7d2f50061a2093950ca9e7",
    measurementId: "G-4W9LWKBCM9"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;