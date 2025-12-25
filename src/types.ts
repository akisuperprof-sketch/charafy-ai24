import React from 'react';

export const TransformationType = {
    FIGURE: 'FIGURE',
    PLUSHIE: 'PLUSHIE',
    KEYCHAIN: 'KEYCHAIN',
    ACCESSORY: 'ACCESSORY',
    LINE_STICKER: 'LINE_STICKER',
    DISCORD_STICKER: 'DISCORD_STICKER',
} as const;

export type TransformationType = typeof TransformationType[keyof typeof TransformationType];

export interface TransformationOption {
    id: TransformationType;
    label: string;
    icon: React.ReactNode;
    prompt: string;
}
