import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/image-removebg-preview (2).png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} shadow-md`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
           <div className='flex items-center gap-2'>
             <img src={logo} alt="" className='h-12' />
             <a className="text-2xl font-bold tracking-wide cursor-pointer" >
               JobTalk
             </a>
           </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:underline text-sm">Home</a>
          <a href="#about" className="hover:underline text-sm">About</a>
          <a href="#features" className="hover:underline text-sm">Blog</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-full transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="/loginform" className="text-sm hover:underline">Login</a>
          <a href="/signupform" className="px-4 py-2 text-sm bg-[#737778] hover:bg-[#737778] text-white rounded-3xl transition">
            Register
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-gray-800 text-white"
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              <a href="/" className="hover:underline">Home</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/login" className="hover:underline">Login</a>
              <a href="/signup" className="hover:underline">Sign Up</a>
              <button onClick={toggleTheme} className="mt-2 inline-flex items-center gap-2 text-sm">
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
