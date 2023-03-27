import './App.css';
import * as React from "react"


import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import TestSection from './Pages/TestSection/TestSection';
import { Footer } from './Components/Footer/Footer';
import { Test } from './Pages/Test/Test';
<<<<<<< HEAD
import { SearchForm } from './Components/SearchForm/SearchForm';
import { SearchResult } from './Pages/SearchResult/SearchResult';
=======
>>>>>>> master

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/test-sections' element={<TestSection />} />
          <Route path='/test-sections/:id' element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
