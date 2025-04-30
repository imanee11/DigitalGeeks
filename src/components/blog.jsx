import React, { useState } from 'react';

import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import NavBar from './home/NavBar';




const Blog = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [posts, setPosts] = useState([]);

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
          <NavBar />
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
 <div className="pt-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative flex flex-col m-4 md:flex-row  p-4 "
          >
            {/* Three dots menu */}
            <div className="absolute top-4 right-4">
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
                    <MdModeEditOutline size={20}  /> 
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

            {/* IMAGE */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="h-[33vh] object-cover mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              />
            )}

            {/* CONTENT */}
            <div className="md:ml-6 mt-4 md:mt-0 flex flex-col">
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

              <button className="self-start px-4 py-2 mt-12 text-sm font-medium text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>



      <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">

{/* 
        <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
              <span class="mb-1 block text-sm leading-6 text-cyan-500">Nervous But Ready</span>
              My very first job interview taught me more than any class ever did.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
              <p>Walking into the room, I felt overwhelmed. But when I sat down, I realized the interviewers were human too. I smiled, breathed, and told my story like I owned it.</p>
            </div>
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6" href="">
              Read more<span class="sr-only">, First interview experience</span>
              <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1647964366344-bc680baf64e2?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Interview nervous" className="h-[33vh] object-cover mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" />
        </li> */}


        <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
              <span class="mb-1 block text-sm leading-6 text-cyan-500">Unexpected Questions</span>
              “Tell me about a failure” — I wasn’t ready for that one.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
              <p>I froze. Then I remembered my coding bootcamp presentation that failed due to Wi-Fi. I told them what I learned and how I bounced back. Turns out, that honesty mattered more than a perfect answer.</p>
            </div>
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6" href="">
              Read more<span class="sr-only">, Interview challenge experience</span>
              <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" alt="Interview question" class="h-[33vh] object-cover mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" />
        </li>


        <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold">
              <span class="mb-1 block text-sm leading-6 text-cyan-500">When Passion Wins</span>
              I didn’t have the best resume, but I had heart.
            </h3>
            <div class="prose prose-slate prose-sm text-slate-600">
              <p>They asked about experience, and I didn’t have much. But I spoke about projects I built on weekends, how I solved problems, and why I wanted to grow. They hired me for potential, not the paper.</p>
            </div>
            <a class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6" href="">
              Read more<span class="sr-only">, Passion in interview</span>
              <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN2fGVufDB8fDB8fHww" alt="Passionate candidate" className="h-[33vh] object-cover mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" />
        </li>

      </ul>


    

    </div>

  );
};

export default Blog;