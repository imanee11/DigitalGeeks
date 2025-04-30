import React, { useEffect, useState } from 'react';

import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import NavBar from './home/NavBar';


import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Footer from './home/Footer';

import logo from '../assets/images/image-removebg-preview (2).png'






const Blog = () => {

  const navigate = useNavigate();


  const [isOpenn, setIsOpenn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenuu = () => setIsOpenn(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);


  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);


  const [editPostId, setEditPostId] = useState(null); // track the post being edited


  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: editPostId || Date.now(),
      category,
      title,
      text: post,
      image: imagePreview,
    };

    if (editPostId) {
      setPosts(
        posts.map((p) => (p.id === editPostId ? updatedPost : p))
      );
    } else {
      setPosts([updatedPost, ...posts]);
    }

    // Reset everything
    setCategory("");
    setTitle("");
    setPost("");
    setImage(null);
    setImagePreview(null);
    setEditPostId(null);
    setIsOpen(false);
  };


  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (post) => {
    setCategory(post.category);
    setTitle(post.title);
    setPost(post.text);
    setImagePreview(post.image);
    setEditPostId(post.id);
    setIsOpen(true);
  };





  return (
    <div>

      {/* navbar */}
      <header className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} shadow-md`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='h-12' />
            <a className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => navigate("/")}>
              JobTalk
            </a>
          </div>


          {/* Desktop Links */}
          {/* <div className="hidden md:flex items-center gap-6">
                <a href="/" className="hover:underline text-sm">Home</a>
                <a href="#about" className="hover:underline text-sm">About</a>
                <a href="#features" className="hover:underline text-sm">Features</a>
              </div> */}

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme} className="hover:bg-gray-800 dark:hover:bg-gray-200 p-2 rounded-full transition">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="/login" className="text-sm hover:underline">Login</a>
            <a href="/signup" className="px-4 py-2 text-sm bg-[#737778] hover:bg-[#737778] text-white rounded-3xl transition">
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenuu} className="md:hidden">
            {isOpenn ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpenn && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden overflow-hidden bg-gray-800 text-white"
            >
              <div className="flex flex-col px-4 py-2 space-y-2">
                {/* <a href="/" className="hover:underline">Home</a>
                    <a href="/blog" className="hover:underline">Blog</a> */}
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




      <div className="relative">
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-2 right-2 p-1 group cursor-pointer outline-none hover:rotate-90 duration-300"
          title="Add New"
        >
          <svg
            className="stroke-black fill-none group-hover:fill-grey group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="35px"
            width="35px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path strokeWidth="1.5" d="M8 12H16"></path>
            <path strokeWidth="1.5" d="M12 16V8"></path>
          </svg>
        </button>
      </div>


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[20px] font-bold">Share Your Experience</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Input */}
              <input
                type="text"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Category (e.g., Unexpected Questions)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />

              {/* Title Input */}
              <input
                type="text"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Title (e.g., “Tell me about a failure” — I wasn’t ready for that one.)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              {/* Main Text */}
              <textarea
                className="w-full p-4 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                placeholder="Share your story..."
                value={post}
                onChange={(e) => setPost(e.target.value)}
                required
              ></textarea>

              {/* Image Upload Input */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setImage(file);
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
                className="mt-2"
              />

              {/* Preview Image */}
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-full h-40 object-cover rounded-xl"
              />


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#b1916b] text-white py-2 rounded-xl font-semibold hover:bg-[#8f8e93] transition duration-300"
              >
                Publish Story
              </button>
            </form>


          </div>
        </div>
      )}

      <div className='py-10 px-[5vw]'>
        <div className='flex justify-center flex-wrap gap-8'>
          {posts.map((post) => (
            <div
              key={post.id}
              className=""
            >

              <div className='w-[25vw] h-[70vh] bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer'>
                {/* IMAGE */}
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="h-[33vh] w-[100%] object-cover mb-6 shadow-md rounded-t-lg bg-slate-50  sm:mb-0 xl:mb-6 xl:w-full"
                  />
                )}
                <div className='relative'>
                  {/* CONTENT */}
                  <div className=" flex flex-col p-5">
                    {post.category && (
                      <p className="mb-1 block text-sm font-semibold text-cyan-500">
                        {post.category}
                      </p>
                    )}

                    {post.title && (
                      <h2 className="mb-1 text-slate-900 font-semibold">
                        {post.title}
                      </h2>
                    )}

                    {post.text && (
                      <p className="text-sm text-slate-600">
                        {post.text}
                      </p>
                    )}

                    <button className="self-end px-4 py-2 mt-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                      Read more
                    </button>
                  </div>
                  {/* Three dots menu */}
                  <div className="absolute top-4 right-0">
                    <button
                      onClick={() => toggleMenu(post.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <HiOutlineDotsVertical size={20} />
                    </button>

                    {openMenuId === post.id && (
                      <div className="absolute right-0 mt-2 w-15 bg-white border rounded-xl shadow-lg z-10">
                        <button
                          onClick={() => handleEdit(post)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <MdModeEditOutline size={20} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
                        >
                          <MdDelete size={20} className="inline" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>




            </div>
          ))}

          <div className="">

            <div className='w-[25vw] h-[70vh] bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer'>
              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
                alt="Post"
                className="h-[33vh] w-[100%] object-cover mb-6 shadow-md rounded-t-lg bg-slate-50  sm:mb-0 xl:mb-6 xl:w-full"
              />
              <div className='relative'>
                {/* CONTENT */}
                <div className=" flex flex-col p-5">
                    <p className="mb-1 block text-sm font-semibold text-cyan-500">
                    Unexpected Questions
                    </p>

                    <h2 className="mb-1 text-slate-900 font-semibold">
                      “Tell me about a failure” — I wasn’t ready for that one.
                    </h2>

                    <p className="text-sm text-slate-600">
                    I froze. Then I remembered my coding bootcamp presentation that failed due to Wi-Fi.
                    </p>

                  <button className="self-end px-4 py-2 mt-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    Read more
                  </button>
                </div>
                {/* Three dots menu */}
                <div className="absolute top-4 right-0">
                  <button
                    onClick={() => toggleMenu(post.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <HiOutlineDotsVertical size={20} />
                  </button>

                  {openMenuId === post.id && (
                    <div className="absolute right-0 mt-2 w-15 bg-white border rounded-xl shadow-lg z-10">
                      <button
                        onClick={() => handleEdit(post)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        <MdModeEditOutline size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
                      >
                        <MdDelete size={20} className="inline" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Footer />


    </div>

  );
};

export default Blog;