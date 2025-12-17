import React, { useState } from 'react';
import { ComicWado } from './WadoCharacters';

const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <footer className="w-full text-center p-6 mt-8 text-sm text-slate-500">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <ComicWado className="w-12 h-12" />
                    <p>
                        Powered by Google Gemini API.
                        <br />
                        「Charafy-AI24」を楽しんでね！
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-purple-600 hover:underline"
                    aria-haspopup="dialog"
                >
                    利用上の注意・プライバシー
                </button>
            </footer>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
                    onClick={() => setIsModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div
                        className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 id="modal-title" className="text-xl font-bold text-slate-800 mb-4">利用上の注意・プライバシー</h2>
                        <div className="text-left text-slate-600 space-y-3 text-sm">
                            <p className="font-bold text-purple-700">【データの取り扱いについて】</p>
                            <p>・画像データおよびプロンプトは、Google Gemini APIでの生成処理にのみ使用されます。</p>
                            <p>・<span className="font-bold">このアプリの開発者や第三者に、お客様の画像や入力情報が送信・保存されることは一切ありません。</span></p>

                            <hr className="my-2 border-slate-200" />

                            <p>・本アプリの利用に伴う行動・結果については、利用者ご自身の責任にてご判断ください。</p>
                            <p>・生成された画像の権利や商用利用の可否については、Google Generative AIの利用規約をご参照ください。</p>
                            <p>・不具合や環境依存による動作不良については、動作保証いたしかねます。あらかじめご了承ください。</p>
                        </div>
                        <div className="text-right mt-6">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                aria-label="閉じる"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;
