import React from 'react';
import { TransformationType } from '../types';
import { TRANSFORMATION_OPTIONS } from '../constants';

interface OptionsPanelProps {
    selectedOptionId: TransformationType;
    onOptionSelect: (id: TransformationType) => void;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ selectedOptionId, onOptionSelect }) => {

    const handleRandomSelect = () => {
        const randomIndex = Math.floor(Math.random() * TRANSFORMATION_OPTIONS.length);
        onOptionSelect(TRANSFORMATION_OPTIONS[randomIndex].id);
    };

    return (
        <div className="p-4">
            <h2 className="text-center text-xl font-semibold text-slate-700 mb-4">✨ スタイルを選択 ✨</h2>
            <div className="grid grid-cols-2 gap-4">
                {TRANSFORMATION_OPTIONS.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onOptionSelect(option.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedOptionId === option.id
                                ? 'bg-purple-500 border-purple-600 text-white shadow-purple-300'
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-purple-50 hover:border-purple-300 focus:ring-purple-400'
                            }`}
                    >
                        {option.icon}
                        <span className="mt-2 font-semibold text-sm">{option.label}</span>
                    </button>
                ))}
            </div>
            <div className="mt-4">
                <button
                    onClick={handleRandomSelect}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-amber-400 text-amber-500 font-semibold rounded-full shadow-md hover:bg-amber-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                >
                    <span className="text-xl" role="img" aria-label="random">🎲</span>
                    おまかせで選ぶ
                </button>
            </div>
        </div>
    );
};

export default OptionsPanel;
