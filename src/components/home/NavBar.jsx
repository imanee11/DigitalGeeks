import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a className="text-2xl font-bold tracking-wide" href="/">
          JobTalk
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:underline text-sm">Home</a>
          <a href="/blog" className="hover:underline text-sm">Blog</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-full transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="/login" className="text-sm hover:underline">Login</a>
          <a href="/signup" className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition">
            Sign Up
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