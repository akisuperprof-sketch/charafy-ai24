import React, { useState } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import OptionsPanel from './components/OptionsPanel';
import ResultDisplay from './components/ResultDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import { generateCharacterImage } from './services/geminiService';
import { TransformationType } from './types';
import { TRANSFORMATION_OPTIONS } from './constants';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sourceImageUrl, setSourceImageUrl] = useState<string | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<TransformationType>(TransformationType.FIGURE);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userPrompt, setUserPrompt] = useState<string>('');

  const handleImageUpload = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setSourceImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    setGeneratedImages([]);
    setError(null);
  };

  const resetImage = () => {
    setSelectedFile(null);
    setSourceImageUrl(null);
    setGeneratedImages([]);
    setError(null);
    setUserPrompt('');
  };

  const handleOptionSelect = (id: TransformationType) => {
    setSelectedOptionId(id);
  };

  const handleGenerate = async () => {
    if (!selectedFile || !sourceImageUrl) return;

    setLoading(true);
    setError(null);
    setGeneratedImages([]);

    try {
      const option = TRANSFORMATION_OPTIONS.find((opt) => opt.id === selectedOptionId);
      if (!option) throw new Error('Invalid option selected.');

      // Extract base64 data (remove prefix "data:image/jpeg;base64,")
      const base64Data = sourceImageUrl.split(',')[1];
      const mimeType = selectedFile.type;

      const fullPrompt = userPrompt.trim()
        ? `${option.prompt}\n\nAdditional user instructions: ${userPrompt}`
        : option.prompt;

      const generatedImageBase64 = await generateCharacterImage(
        base64Data,
        mimeType,
        fullPrompt
      );

      setGeneratedImages([generatedImageBase64]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center pb-12 font-sans">
      <div className="w-full max-w-md bg-white shadow-xl min-h-screen sm:min-h-[calc(100vh-2rem)] sm:rounded-3xl sm:my-4 sm:overflow-hidden flex flex-col">
        <Header />

        <main className="flex-grow flex flex-col gap-6 px-2">
          <section>
            <ImageUploader
              onImageUpload={handleImageUpload}
              sourceImageUrl={sourceImageUrl}
              resetImage={resetImage}
            />
          </section>

          {sourceImageUrl && !loading && generatedImages.length === 0 && (
            <>
              <section className="animate-fade-in-up">
                <OptionsPanel
                  selectedOptionId={selectedOptionId}
                  onOptionSelect={handleOptionSelect}
                />
              </section>

              <section className="px-6 animate-fade-in-up">
                <div className="text-center mb-2 text-slate-600 font-medium text-sm">表情やポーズを追加 (任意)</div>
                <input
                  type="text"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  placeholder="9種類9分割で"
                  className="w-full bg-slate-700 text-white rounded-full px-6 py-3 text-center placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner"
                />
              </section>

              <div className="px-6 pb-4">
                <button
                  onClick={handleGenerate}
                  className="w-full py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  変身させる！ ✨
                </button>
              </div>
            </>
          )}

          {loading && (
            <section className="animate-fade-in">
              <LoadingSpinner />
            </section>
          )}

          {(generatedImages.length > 0 || error) && (
            <section className="animate-fade-in-up">
              <ResultDisplay generatedImages={generatedImages} error={error} />
              {generatedImages.length > 0 && (
                <div className="px-6 mt-4">
                  <button
                    onClick={() => {
                      setGeneratedImages([]);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-3 text-lg font-semibold text-purple-600 bg-purple-50 border-2 border-purple-200 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    もう一度あそぶ 🔄
                  </button>
                </div>
              )}
            </section>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
