import React, { useState, useCallback } from 'react';

interface ImageUploaderProps {
    onImageUpload: (file: File) => void;
    sourceImageUrl: string | null;
    resetImage: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, sourceImageUrl, resetImage }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            onImageUpload(event.target.files[0]);
        }
    };

    const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onImageUpload(e.dataTransfer.files[0]);
        }
    }, [onImageUpload]);

    if (sourceImageUrl) {
        return (
            <div className="text-center">
                <div className="relative inline-block w-full">
                    <img src={sourceImageUrl} alt="Uploaded preview" className="w-full max-h-96 object-contain rounded-xl shadow-lg border-4 border-white" />
                    <button
                        onClick={resetImage}
                        className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-transform hover:scale-110"
                        aria-label="Reset image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
            <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`relative border-4 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors duration-300 ${isDragging ? 'border-purple-400 bg-purple-50' : 'border-slate-300 bg-slate-50 hover:border-purple-300'}`}
            >
                <label htmlFor="image-upload" className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-600 font-semibold">画像をドラッグ＆ドロップ</p>
                    <p className="text-slate-500 text-sm mt-1">またはクリックしてファイルを選択</p>
                </label>
            </div>
        </div>
    );
};

export default ImageUploader;
