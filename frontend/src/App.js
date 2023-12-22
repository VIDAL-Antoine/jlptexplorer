import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataDisplay from './components/DataDisplay';
import DetailedView from './components/DetailedView';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  const [jlptLevel, setJlptLevel] = useState('n5');

  return (
    <div className='app-container'>
    <BrowserRouter>
      <Header setJlptLevel={setJlptLevel} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/n5" element={<DataDisplay jlptLevel={jlptLevel} />} />
        <Route path="/n4" element={<DataDisplay jlptLevel={jlptLevel} />} />
        <Route path="/n3" element={<DataDisplay jlptLevel={jlptLevel} />} />
        <Route path="/n2" element={<DataDisplay jlptLevel={jlptLevel} />} />
        <Route path="/n1" element={<DataDisplay jlptLevel={jlptLevel} />} />
        <Route path="/nu" element={<DataDisplay jlptLevel={jlptLevel} />} />
        <Route path="/:jlptLevel/:id" element={<DetailedView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
