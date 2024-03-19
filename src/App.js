import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import Nav from './components/Header/Nav';
import { useState } from 'react';

function App() {

  const [isForm, setIsForm] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home isForm={isForm} />} />
          <Route path="/form" element={<Form isForm={isForm}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
