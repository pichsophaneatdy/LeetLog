import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import FormPage from './pages/FormPage/FormPage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/addNewLeetCode" element={<FormPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
