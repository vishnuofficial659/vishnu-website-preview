import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ imageSrc, altText, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden py-10"
        >
            <div className="relative w-full max-w-7xl">
                <img
                    src={imageSrc}
                    alt={altText}
                    className="w-full h-auto object-contain shadow-2xl"
                />
                <div className="absolute inset-0">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default PageContainer;
