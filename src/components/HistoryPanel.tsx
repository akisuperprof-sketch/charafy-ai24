import React from 'react';
import type { HistoryItem } from '../types';
import { TRANSFORMATION_OPTIONS } from '../constants';

interface HistoryPanelProps {
    historyItems: HistoryItem[];
    onSelect: (item: HistoryItem) => void;
    onDelete: (id: string, e: React.MouseEvent) => void;
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ historyItems, onSelect, onDelete }) => {
    if (historyItems.length === 0) {
        return null;
    }

    return (
        <div className="w-full mt-8 p-4 bg-white/50 rounded-3xl backdrop-blur-sm">
            <h3 className="text-lg font-bold text-slate-700 mb-4 px-2">💾 過去の作品</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {historyItems.map((item) => {
                    const option = TRANSFORMATION_OPTIONS.find(opt => opt.id === item.optionId);
                    return (
                        <div
                            key={item.id}
                            className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all border-2 border-white hover:border-purple-300"
                            onClick={() => onSelect(item)}
                        >
                            <img
                                src={`data:image/png;base64,${item.imageBase64}`}
                                alt="History"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                            {/* Option Icon Badge */}
                            <div className="absolute top-1 left-1 bg-white/90 rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm">
                                {option?.icon}
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={(e) => onDelete(item.id, e)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-sm"
                                title="削除"
                            >
                                ×
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HistoryPanel;
