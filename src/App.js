import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Form} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import FormPage from './pages/FormPage/FormPage';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import DetailPage from './pages/DetailPage/DetailPage';
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
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<LoginPage />} />
            {/* Protected Route */}
            <Route 
              path="/home"
              element={<Homepage />}
            />
            <Route 
              path="/addNewLeetcode"
              element={<FormPage />}
            />
            <Route
              path="/leetcode/:id"
              element={<DetailPage/>}
            />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
    
  );
}

export default App;
