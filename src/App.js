import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import FormPage from './pages/FormPage/FormPage';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

// Apollo Client
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});
function App() {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false)
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Header isMobileHeaderOpen={isMobileHeaderOpen} setIsMobileHeaderOpen={setIsMobileHeaderOpen} />
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/addNewLeetCode" element={<FormPage/>} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
    
  );
}

export default App;
