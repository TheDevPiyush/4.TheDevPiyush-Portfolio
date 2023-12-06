import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomePage from './screens/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage></HomePage> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
