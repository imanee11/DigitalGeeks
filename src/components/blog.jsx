import React from 'react';

const Blog = () => {
    return (
        <div>
          <div className="relative">
  <button
    className="absolute top-2 right-2 p-1 group cursor-pointer outline-none hover:rotate-90 duration-300"
    title="Add New"
  >
    <svg
      className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
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

        <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          
       
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
            <img src="https://images.unsplash.com/photo-1647964366344-bc680baf64e2?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Interview nervous" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"  />
          </li>
      
       
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
            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" alt="Interview question" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" />
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
            <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN2fGVufDB8fDB8fHww" alt="Passionate candidate" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" />
          </li>
      
        </ul>
      </div>
      
    );
};

export default Blog;