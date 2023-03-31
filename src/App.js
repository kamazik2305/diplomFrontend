import './App.css';
import * as React from "react"


import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import TestSectionList from './Pages/TestSectionList/TestSectionList';
import { TestList } from './Pages/TestList/TestList';


function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='test-sections' element={<TestSectionList />} />
          <Route path='test-sections/:id' element={<TestList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
