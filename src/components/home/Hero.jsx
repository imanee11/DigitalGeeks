import React from 'react';
import image from '../../constants/image';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
    return (
      
        <div>
         
    

  <section class="relative h-[90vh] flex items-center justify-center text-center">
 
  <div class="absolute rounded-xl bg m-4 inset-0 bg-center bg-cover bg-no-repeat "><img src={image.cv} className=' w-[100%] object-cover rounded-xl  h-[100%]' alt="" /></div>
  

  <div class="absolute inset-0 "></div>

  
  <div class="relative z-10 text-white px-6 max-w-2xl">
  <h2 class="text-4xl font-medieum sm:text-5xl  mb-6 leading-tight">
  Real Interviews Real Stories.
</h2>
<p class="text-xl font-light md:text-2xl mt-6 text-gray-100 mb-6 ">
  Explore authentic interview journeys shared by real people to learn, to grow, and to inspire others.
</p>
  
 
<button onClick={() => navigate("/blog")}
  type="submit"
  class="flex justify-center text-black gap-2 items-center mx-auto shadow-xl text-lg bg-white/10  shadow backdrop-blur-md  backdrop-blur-md lg:font-semibold isolation-auto   before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden  rounded-full group"
>
  Explore
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>


  </div>
</section>


        </div>
    );
};

export default Hero;