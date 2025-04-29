import React from 'react';
import logo from '../../assets/images/image-removebg-preview (2).png'; // Adjust the path to your logo image
const Footer = () => {
    return (
        <>
            <div className="bg-[#343A40] text-white py-10">
                {/* Logo and Description */}
                <div className="text-center mb-6">
                    <a href="/" className="flex items-center justify-center text-3xl font-semibold text-gray-100 hover:text-gray-300">
                        <img src={logo} className="h-12 mr-3 w-sm:h-9" alt="JobTalk Logo"/>
                        JobTalk
                    </a>
                    <span className="block text-lg text-gray-400">
                    Discover inspiring stories and share yours.
                    </span>

                    <a href="https://www.linkedin.com" className="text-bg-[#b1916b] hover:text-[#8f8e93] text-lg font-semibold">
                    Join JobTalk now and start exploring inspiring stories!
                    </a>
                </div>

                {/* Footer Links */}
               

                {/* Footer Bottom 
                <div className="text-center text-sm text-gray-400 mt-6">
                    <span>© 2025 JobTalk. Built with <a href="https://flowbite.com" className="text-purple-600 hover:underline">Flowbite</a> and <a href="https://linkden.com" className="text-purple-600 hover:underline">LinkedIn</a>.</span>
                </div>*/}

                {/* News Feed Section */}
                <div className="text-center mt-10">
                    <button className="bg-[#b1916b] text-white py-2 px-4 rounded-md hover:bg-[#8f8e93] focus:outline-none">See the new  stories</button>
                </div>
            </div>
        </>
    );
};

export default Footer;
