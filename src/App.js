import React, {useState} from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import AboutPage from './pages/AboutPage';
import TechPage from './pages/TechPage';
import Reviews from './components/Reviews/Reviews';
import SignUpPage from './pages/SignUpPage';
import Video from './components/BackgroundVideo/Video';

function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar toggle={toggle}/>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/behind-the-tech" element={<TechPage />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
