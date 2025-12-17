import React, { useState, useEffect } from 'react';
import { WizardWado } from './WadoCharacters';

const loadingMessages = [
    "AIが魔法をかけています...",
    "キャラクターに命を吹き込み中...",
    "かわいく変身させています...",
    "もうすぐ完成です！",
];

const LoadingSpinner: React.FC = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-purple-50 rounded-2xl">
            <div className="relative">
                <WizardWado className="w-32 h-32 animate-bounce" />
                <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-lg font-semibold text-purple-700 text-center transition-opacity duration-500">
                {loadingMessages[messageIndex]}
            </p>
        </div>
    );
};

export default LoadingSpinner;
