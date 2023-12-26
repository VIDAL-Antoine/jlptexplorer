import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrammarListView from './components/GrammarListView';
import DetailedView from './components/DetailedView';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {

  return (
    <div className='app-container'>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:jlptLevel" element={<GrammarListView />} />
        <Route path="/:jlptLevel/:id" element={<DetailedView />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
