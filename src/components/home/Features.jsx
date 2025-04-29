import React from 'react';
import image from '../../constants/image';

const Features = () => {
    return (
        <>
            <div className='px-[5vw] py-10'>
                <h3 className="text-[40px] text-center font-semibold text-gray-900 mb-6 tracking-tight ">Features</h3>
                {/* <p className='text-gray-600 text-[14px] text-center'>Everything you need to share, connect, and grow through real work stories.</p> */}
                <section id="features" className="flex justify-center ">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <img src={image.feature1} alt="" className='w-[100%] h-[30vh] object-cover rounded-t-lg' />
                            <div className='px-5 py-6'>
                                <h4 className="text-[18px] font-bold mb-2">Create & Share Blog Posts</h4>
                                <p className="text-gray-600 text-[14px]">Share your work life stories, challenges, or tips with the community.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <img src={image.feature2} alt="" className='w-[100%] h-[30vh] object-cover rounded-t-lg' />
                            <div className='px-5 py-6'>
                                <h4 className="text-[18px] font-bold mb-2">Comment & Like</h4>
                                <p className="text-gray-600 text-[14px]">Engage with others through comments—offer advice, share support, or just relate.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <img src={image.feature3} alt="" className='w-[100%] h-[30vh] object-cover rounded-t-lg' />
                            <div className='px-5 py-6'>
                                <h4 className="text-[18px] font-bold mb-2">Explore Stories by Topic</h4>
                                <p className="text-gray-600 text-[14px]">Browse blogs by categories like Burnout, Success Stories, Workplace Conflict, Remote Work, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Features;