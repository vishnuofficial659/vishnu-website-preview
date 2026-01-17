import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const UiUx = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: "Megamart",
            subtitle: "App + Web",
            image: "/assets/frame%204.jpg",
            path: "/uiux/project1",
            desc: "Your Ultimate Fashion Destination Where Style Meets Affordability."
        },
        {
            title: "Parkgo",
            subtitle: "App Interface",
            image: "/assets/frame%207.jpg",
            path: "/uiux/project2",
            desc: "Connecting Drivers With Unused Private Parking Spaces In Cities."
        },
        {
            title: "Legal Ease",
            subtitle: "App Interface",
            image: "/assets/frame%2010.jpg",
            path: "/uiux/project3",
            desc: "Affordable And Reliable Legal Assistance For Urban Professionals."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 md:p-12 font-sans"
        >
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-black tracking-tight text-center md:text-left">UI UX Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group flex flex-col"
                            onClick={() => navigate(project.path)}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white relative">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1 text-black">{project.title}</h3>
                                    <p className="text-gray-500 font-medium mb-4">{project.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.desc}
                                    </p>
                                </div>

                                <button className="w-full py-3 bg-black text-white rounded-full font-semibold flex items-center justify-center gap-2 group-hover:bg-gray-800 transition-colors">
                                    Open Project <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default UiUx;
