import React from 'react';

const About = () => {
    return (
        <>
            <section id="about" className="bg-white py-10 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-[40px] font-semibold text-gray-900 mb-6 tracking-tight">
                        Why <span className="text-[#b1916b]">JobTalk</span>?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                        JobTalk is more than just a social network — it's a space where advice, failures, and successes are shared so everyone can grow and move forward.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        No matter where you are in your professional journey, <span className="font-medium text-gray-900">JobTalk</span> helps you stay motivated and learn from others' real experiences.
                    </p>
                    <p className="mt-6 text-lg sm:text-xl text-gray-800 font-medium">
                        Join JobTalk today to explore inspiring stories and start sharing your own!
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;