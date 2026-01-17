import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const ref = useRef(null);

    // Mouse movement logic for 3D parallax effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            style={{ perspective: 1000 }}
        >
            {/* 3D Moving Container */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full max-w-7xl mx-auto px-4 py-8 flex flex-col items-center justify-center md:block" // Centering for mobile
            >
                <div className="relative shadow-2xl rounded-xl overflow-hidden transform-gpu w-full">
                    <motion.img
                        src="/assets/frame%201.jpg"
                        alt="Cover Page"
                        className="w-full h-auto object-contain"
                        style={{
                            translateZ: "50px", // Pushes image slightly forward
                            scale: 1.05 // Prevents edges from showing during rotation
                        }}
                    />

                    {/* Enter Button Layer */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none flex items-end justify-center md:block" // Flex center bottom for mobile
                        style={{ translateZ: "100px" }} // BUTTON FLOATS ABOVE IMAGE
                    >
                        <div className="w-full h-full relative">
                            <button
                                onClick={() => navigate('/about')}
                                className="pointer-events-auto mb-8 md:mb-0 md:absolute md:bottom-20 md:right-14 px-6 py-3 bg-black text-white font-semibold text-base rounded-full shadow-2xl hover:bg-white hover:text-black hover:scale-110 transition-all border-2 border-transparent hover:border-black flex items-center gap-2"
                            >
                                Enter Portfolio <ChevronRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Home;
