import React from 'react';
import { ArtistWado } from './WadoCharacters';

interface ResultDisplayProps {
    generatedImages: string[];
    error: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ generatedImages, error }) => {

    if (error) {
        return (
            <div className="p-4 m-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
                <p className="font-bold">おっと、エラーが発生しました</p>
                <p>{error}</p>
            </div>
        );
    }

    if (generatedImages.length === 0) {
        return (
            <div className="text-center w-full h-full flex flex-col justify-center items-center">
                <ArtistWado className="w-32 h-32 mx-auto opacity-70" />
                <p className="mt-4 text-slate-500">ここに変身したキャラクターが表示されます。</p>
            </div>
        );
    }

    return (
        <div className="p-2 w-full">
            <h2 className="text-center text-xl font-semibold text-slate-700 mb-4">🎉 完成！ 🎉</h2>
            <div className="grid grid-cols-1 gap-6">
                {generatedImages.map((imageBase64, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={`data:image/png;base64,${imageBase64}`}
                            alt={`Generated character ${index + 1}`}
                            className="w-full max-h-[60vh] object-contain rounded-lg"
                        />
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <a
                                href={`data:image/png;base64,${imageBase64}`}
                                download={`character-${Date.now()}.png`}
                                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform hover:scale-105"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                ダウンロード
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultDisplay;
