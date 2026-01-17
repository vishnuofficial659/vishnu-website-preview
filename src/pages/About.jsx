import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const About = () => {
    const navigate = useNavigate();

    // Data for the menu tiles
    const menuItems = [
        { title: "UI UX", subtitle: "projects", path: "/uiux" },
        { title: "Branding", subtitle: "projects", path: "/branding" },
        { title: "Character", subtitle: "design", path: "/character" },
        { title: "Brand", subtitle: "communications", path: "/brand-comm" },
        { title: "Fun", subtitle: "graphics", path: "/fun-graphics" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-screen bg-[#E5E7EB] text-black font-sans flex flex-col justify-center p-8 md:p-20 relative overflow-hidden"
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-gray-200 to-gray-300 -z-10" />

            <div className="w-full max-w-[90%] md:max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center">
                    <h1 className="text-6xl md:text-8xl font-normal tracking-tight mb-8 text-black flex items-baseline justify-center">
                        <span className="text-7xl md:text-9xl font-normal -ml-1">A</span>bout Me:
                    </h1>

                    <div className="max-w-5xl space-y-1 text-lg md:text-2xl leading-snug font-medium text-gray-900 text-center">
                        <p>Hey, I'm a designer who's slightly obsessed with clean lines, bold ideas, and coffee-fueled creativity.</p>
                        <p>I love turning blank canvases into scroll-stopping visuals—and yes, I will tweak a pixel at 2AM if it means making something just right.</p>
                        <p>What am I looking forward to? Collaborating with brands and people who are just as excited about design as I am.</p>
                        <p>Whether it's building something from scratch or giving an old idea a fresh spin,</p>
                        <p>I'm here for the process, the problem-solving, and the “whoa, that looks awesome” moments.</p>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-400 mb-8 max-w-2xl mx-auto" />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">Projects</h2>

                {/* Tiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(item.path)}
                            className="bg-black text-white aspect-square rounded-xl p-5 relative cursor-pointer flex flex-col justify-between group shadow-2xl hover:shadow-3xl transition-all hover:bg-blue-600"
                        >
                            <div className="font-normal text-lg md:text-xl leading-tight mt-1">
                                <div className="block">{item.title}</div>
                                <div className="block">{item.subtitle}</div>
                            </div>

                            <div className="self-end text-gray-400 group-hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default About;
