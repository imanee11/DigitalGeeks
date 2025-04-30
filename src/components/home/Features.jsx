import React from 'react';
import image from '../../constants/image';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate();

    // Configuration for features
    const features = [
        {
            id: 1,
            title: 'Create & Share Blog Posts',
            description: 'Share your work life stories, challenges, or tips with the community.',
            image: image.feature1,
            route: '/blog',
        },
        {
            id: 2,
            title: 'Comment & Like',
            description: 'Engage with others through comments—offer advice, share support, or just relate.',
            image: image.feature2,
            route: '/comments',
        },
        {
            id: 3,
            title: 'Explore Stories by Topic',
            description: 'Browse blogs by categories like Burnout, Success Stories, Workplace Conflict, Remote Work, and more.',
            image: image.feature3,
            route: '/topics',
        },
    ];

    return (
        <div className="px-[5vw] py-10">
            <h3 className="text-[40px] text-center font-semibold text-gray-900 mb-6 tracking-tight">Features</h3>
            {/* <p className='text-gray-600 text-[14px] text-center'>Everything you need to share, connect, and grow through real work stories.</p> */}
            <section id="features" className="flex justify-center">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            onClick={() => navigate(feature.route)}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-[100%] h-[30vh] object-cover rounded-t-lg"
                            />
                            <div className="px-5 py-6">
                                <h4 className="text-[18px] font-bold mb-2">{feature.title}</h4>
                                <p className="text-gray-600 text-[14px]">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;