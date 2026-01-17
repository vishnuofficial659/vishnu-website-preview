import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/') return null;

    return (
        <div className="fixed top-6 right-6 z-50 flex gap-4">
            <button
                onClick={() => navigate(-1)}
                className="p-2 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all border border-black shadow-lg"
                title="Go Back"
            >
                <ArrowLeft size={20} />
            </button>
            <button
                onClick={() => navigate('/')}
                className="p-2 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all border border-black shadow-lg"
                title="Go Home"
            >
                <Home size={20} />
            </button>
        </div>
    );
};

export default Navigation;
