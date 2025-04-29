import React from 'react';
import image from '../../constants/image';

const Features = () => {
    return (
        <>
            <div className='px-[5vw]'>
                {/* <p className='text-[20px] font-semibold'>Features</p> */}
                {/* <div className='py-5 flex justify-center gap-[3vw]'>
                    <div className='w-[25vw]'>
                        <img src={image.feature1} alt="" className='w-[100%] rounded-xl' />
                        <div>
                            <p className='font-semibold pt-2 text-[18px]'>Create & Share Blog Posts</p>
                            <p className='text-black/75 text-[14px]'>Share your work life stories, challenges, or tips with the community.</p>
                        </div>
                    </div>
                    <div className='w-[25vw]'>
                        <img src={image.feature2} alt="" className='w-[100%] rounded-xl' />
                        <div>
                            <p className='font-semibold pt-2 text-[18px]'>Comment & Discuss</p>
                            <p className='text-black/75 text-[14px]'>Engage with others through comments—offer advice, share support, or just relate.</p>
                        </div>
                    </div>
                    <div className='w-[25vw]'>
                        <img src={image.feature1} alt="" className='w-[100%] rounded-xl' />
                        <div>
                            <p className='font-semibold pt-2 text-[18px]'>Explore Stories by Topic</p>
                            <p className='text-black/75 text-[14px]'>Browse blogs by categories like Burnout, Success Stories, Workplace Conflict, Remote Work, and more.</p>
                        </div>
                    </div>
                </div> */}

                <section id="blog" class="container mx-auto px-6 py-16">
                    <h3 class="text-2xl font-semibold mb-8">Features</h3>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <img src={image.feature1} alt="" className='w-[100%] h-[30vh] object-cover rounded-t-lg' />
                            <div className='px-5 py-6'>
                                <h4 class="text-[18px] font-bold mb-2">Create & Share Blog Posts</h4>
                                <p class="text-gray-600 text-[14px]">Share your work life stories, challenges, or tips with the community.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <img src={image.feature2} alt="" className='w-[100%] h-[30vh] object-cover rounded-t-lg' />
                            <div className='px-5 py-6'>
                                <h4 class="text-[18px] font-bold mb-2">Comment & Like</h4>
                                <p class="text-gray-600 text-[14px]">Engage with others through comments—offer advice, share support, or just relate.</p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                            <img src={image.feature3} alt="" className='w-[100%] h-[30vh] object-cover rounded-t-lg' />
                            <div className='px-5 py-6'>
                                <h4 class="text-[18px] font-bold mb-2">Explore Stories by Topic</h4>
                                <p class="text-gray-600 text-[14px]">Browse blogs by categories like Burnout, Success Stories, Workplace Conflict, Remote Work, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>



            </div>





        </>
    );
};

export default Features;