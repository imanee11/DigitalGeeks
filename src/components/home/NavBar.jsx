import React, { useState, useEffect } from "react"; 
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/image-removebg-preview (2).png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status and listen to loginStatusChanged event
  useEffect(() => {
    const checkLoginStatus = () => {
      const status = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(status);
    };

    checkLoginStatus();

    // Listen for custom login/logout event
    window.addEventListener("loginStatusChanged", checkLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLoginStatus);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("loginStatusChanged")); // Notify other components
    navigate("/loginform");
  };

  return (
    <header className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} shadow-md`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12" />
          <a className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => navigate("/")}>
            JobTalk
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:underline text-sm">Home</a>
          <a href="/#about" className="hover:underline text-sm">About</a>
          <a href="/blog" className="hover:underline text-sm">Blog</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-full transition">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-3xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/loginform" className="text-sm hover:underline">Login</a>
              <a href="/signupform" className="px-4 py-2 text-sm bg-[#737778] text-white rounded-3xl transition hover:bg-[#5f6162]">Register</a>
            </>
          )}
        </div>

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
              {isLoggedIn ? (
                <button onClick={handleLogout} className="hover:underline text-left text-white">Logout</button>
              ) : (
                <>
                  <a href="/loginform" className="hover:underline">Login</a>
                  <a href="/signupform" className="hover:underline">Sign Up</a>
                </>
              )}
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

export default NavBar