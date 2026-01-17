import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';

const UiUx = () => {
    const navigate = useNavigate();

    return (
        <PageContainer imageSrc="/assets/frame%203.jpg" altText="UI/UX Projects">
            {/* 
               Project 1 Card Hotspot
            */}
            <button
                onClick={() => navigate('/uiux/project1')}
                className="absolute cursor-pointer rounded-2xl transition-all hover:bg-white/5 active:scale-[0.99] border-2 border-transparent hover:border-white/20"
                style={{
                    left: '5%',
                    top: '25%',
                    width: '30%', // Approximate width of card
                    height: '45%', // Approximate height of card
                    // backgroundColor: 'rgba(255, 0, 0, 0.2)', // Debug
                }}
                aria-label="Open Megamart Project"
            />

            {/* 
               Project 2 Card Hotspot
            */}
            <button
                onClick={() => navigate('/uiux/project2')}
                className="absolute cursor-pointer rounded-2xl transition-all hover:bg-white/5 active:scale-[0.99] border-2 border-transparent hover:border-white/20"
                style={{
                    left: '37.5%', // Centered roughly
                    top: '25%',
                    width: '25%',
                    height: '45%',
                    // backgroundColor: 'rgba(0, 255, 0, 0.2)', // Debug
                }}
                aria-label="Open Parkgo Project"
            />

            {/* 
               Project 3 Card Hotspot
            */}
            <button
                onClick={() => navigate('/uiux/project3')}
                className="absolute cursor-pointer rounded-2xl transition-all hover:bg-white/5 active:scale-[0.99] border-2 border-transparent hover:border-white/20"
                style={{
                    left: '65%',
                    top: '25%',
                    width: '30%',
                    height: '45%',
                    // backgroundColor: 'rgba(0, 0, 255, 0.2)', // Debug
                }}
                aria-label="Open Legal Project"
            />
        </PageContainer>
    );
};

export default UiUx;
