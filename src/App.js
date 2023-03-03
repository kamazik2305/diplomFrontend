import logo from './logo.svg';
import './App.css';
import * as React from "react"


import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import TestSection from './Pages/TestSection/TestSection';
import { Footer } from './Components/Footer/Footer';
import { Test } from './Pages/Test/Test';
import { SearchForm } from './Components/SearchForm/SearchForm';
import { SearchResult } from './Pages/SearchResult/SearchResult';
import { Search } from './Pages/Search/Search';

function App() {

  const [searchString, setSearchString] = React.useState('');
  const [testSections, setTestSections] = React.useState([]);

  return (
    <>
      
      <BrowserRouter>
        <Header searchString={searchString} setSearchString={setSearchString} setTestSections={setTestSections} />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/test-sections' element={<TestSection/>}/>
          <Route path='/test-sections/:id' element={<Test/>}/>
          <Route path='/search-result' element={<SearchResult searchString={searchString} testSections={testSections} />} />
          {/* <Route path='/search' element={<Search/>}/> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
