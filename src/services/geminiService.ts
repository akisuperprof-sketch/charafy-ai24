import { GoogleGenAI, Modality } from '@google/genai';

const MODELS = [
    'imagen-3.0-generate-001',
    'gemini-3-pro-image-preview',
    'nano-banana-pro-preview',
    'gemini-2.0-flash-exp'
];

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

    let lastError: Error | null = null;

    for (const modelName of MODELS) {
        try {
            console.log(`Attempting to generate image with model: ${modelName}`);
            const response = await ai.models.generateContent({
                model: modelName,
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
                if (response.candidates?.[0]?.finishReason === 'SAFETY') {
                    throw new Error(`Safety filter triggered for model ${modelName}.`);
                }

                for (const part of response.candidates[0].content.parts) {
                    if (part.inlineData) {
                        console.log(`Successfully generated image with model: ${modelName}`);
                        return part.inlineData.data;
                    }
                }
            }

            console.warn(`Model ${modelName} returned no image data.`);

        } catch (error) {
            console.error(`Error with model ${modelName}:`, error);
            lastError = error instanceof Error ? error : new Error(String(error));
            // Continue to try the next model
        }
    }

    console.error('All models failed.');
    const errorMessage = lastError ? lastError.message : 'Unknown error.';
    throw new Error(`Generation failed across all models. Last error: ${errorMessage}`);
};
