import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ProjectFlow = ({ frames }) => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    // Mask logic for frames 17, 18, 19, 20
    const currentFrame = frames[index];
    const isMaskedFrame = currentFrame.includes('frame%2017') ||
        currentFrame.includes('frame%2018') ||
        currentFrame.includes('frame%2019') ||
        currentFrame.includes('frame%2020');

    // For these specific frames, we might want a different background or specific container style
    // to hide the white border. A simple approach is adding a slight negative margin or scaling,
    // or ensuring the container background is white.

    // Animation variants
    const pageVariants = {
        initial: { opacity: 0, x: 50 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -50 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    const handleNext = () => {
        if (index < frames.length - 1) {
            setIndex(index + 1);
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
            window.scrollTo(0, 0);
        } else {
            navigate(-1);
        }
    };

    return (
        // Passing a className to PageContainer if it supported it would be good, 
        // but since we are wrapping the content, let's control the background here if needed.
        <div style={{ backgroundColor: isMaskedFrame ? '#FFFFFF' : 'transparent' }}>
            <PageContainer imageSrc={frames[index]} altText={`Slide ${index + 1}`}>
                {/* Navigation Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
                    <div className="flex justify-between px-6 w-full max-w-7xl mx-auto">
                        <button
                            onClick={handlePrev}
                            className="pointer-events-auto p-3 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-sm transition-all shadow-lg hover:scale-110 active:scale-95 border border-white/10"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={handleNext}
                            className={`pointer-events-auto p-3 bg-black/60 hover:bg-black text-white rounded-full backdrop-blur-sm transition-all shadow-lg hover:scale-110 active:scale-95 border border-white/10 ${index === frames.length - 1 ? 'opacity-30 cursor-not-allowed hover:bg-black/60 hover:scale-100' : ''}`}
                            disabled={index === frames.length - 1}
                            aria-label="Next"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Pagination Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 pointer-events-none">
                    {frames.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white shadow-glow' : 'w-2 bg-white/40'}`}
                        />
                    ))}
                </div>
            </PageContainer>
        </div>
    );
};

export default ProjectFlow;
