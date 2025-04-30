import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './components/blog';
import Blogsdetails from './components/blogsdetails';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog" element={<Blogsdetails />} />
        <Route path="/signupform" element={<SignupForm />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>

    </>
  );
};

export default App;