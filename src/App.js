import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import FormPage from './pages/FormPage/FormPage';
import Header from './components/Header/Header';
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
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/addNewLeetCode" element={<FormPage/>} />
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
    
  );
}

export default App;
