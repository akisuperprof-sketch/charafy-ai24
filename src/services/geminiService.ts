import { GoogleGenAI, Modality } from '@google/genai';

const MODEL_NAME = 'gemini-2.5-flash-image-preview';

export const generateCharacterImage = async (
    base64Image: string,
    mimeType: string,
    prompt: string
): Promise<string> => {
    // Use VITE_API_KEY for Vite environment
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
        throw new Error("API_KEY is missing. Please set VITE_API_KEY in your .env file.");
    }
    const ai = new GoogleGenAI({ apiKey: apiKey });

    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64Image,
                            mimeType: mimeType,
                        },
                    },
                    {
                        text: prompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });

        if (response.candidates && response.candidates.length > 0) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    return part.inlineData.data;
                }
            }
        }

        if (response.candidates?.[0]?.finishReason === 'SAFETY') {
            throw new Error('Safety filter triggered. Please try a different image.');
        }

        throw new Error('No image generated.');
    } catch (error) {
        console.error('Gemini API Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error.';
        throw new Error(`Generation failed: ${errorMessage}`);
    }
};
