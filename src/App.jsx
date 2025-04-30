import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './components/blog';
import Blogsdetails from './components/blogsdetails';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog" element={<Blogsdetails />} />
      </Routes>

    </>
  );
};

export default App;