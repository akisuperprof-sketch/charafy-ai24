import React from 'react';

export enum TransformationType {
    FIGURE = 'FIGURE',
    PLUSHIE = 'PLUSHIE',
    KEYCHAIN = 'KEYCHAIN',
    ACCESSORY = 'ACCESSORY',
    LINE_STICKER = 'LINE_STICKER',
    DISCORD_STICKER = 'DISCORD_STICKER',
}

export interface TransformationOption {
    id: TransformationType;
    label: string;
    icon: React.ReactNode;
    prompt: string;
}
