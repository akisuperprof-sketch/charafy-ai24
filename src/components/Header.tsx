import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center p-6 pt-8">
            <h1 className="text-4xl font-bold text-slate-700">
                Charafy-AI24<span className="text-2xl block mt-1">（キャラフィーAI24）</span>
            </h1>
            <p className="text-slate-500 mt-4">
                画像をアップして、好きなスタイルを選ぶだけで、AIがキャラクターに変身させます！
            </p>
        </header>
    );
};

export default Header;
