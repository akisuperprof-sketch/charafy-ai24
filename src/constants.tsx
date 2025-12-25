import { TransformationType } from './types';
import type { TransformationOption } from './types';

export const TRANSFORMATION_OPTIONS: TransformationOption[] = [
    {
        id: TransformationType.FIGURE,
        label: 'フィギュア',
        icon: <span className="text-2xl" role="img" aria-label="figure">🧍</span>,
        prompt: 'Transform the provided illustration into a photorealistic 3D render of a high-quality, collectible vinyl toy figure. Maintain the original character’s design, pose, and colors precisely. The figure should be made of PVC plastic with a smooth, matte finish on skin and glossy highlights on hair, eyes, and clothing details. Place it on a simple, circular white display base. The lighting should be professional studio quality with soft shadows, creating a clean, catalog-style look against a neutral, slightly-off-white background. The focus should be sharp with a shallow depth of field.'
    },
    {
        id: TransformationType.PLUSHIE,
        label: 'ぬいぐるみ',
        icon: <span className="text-2xl" role="img" aria-label="plushie">🧸</span>,
        prompt: 'Transform the provided illustration into a heartwarming, photorealistic photograph of a soft, cuddly plush toy. The character should be made of fluffy, felt-like fabric with visible stitching details, especially around the seams. Give it cute, black plastic safety eyes. The overall form should be soft and slightly rounded. Place the plushie sitting on a cozy, light-colored wooden surface in a brightly lit room with soft, natural light coming from a window.'
    },
    {
        id: TransformationType.KEYCHAIN,
        label: 'キーホルダー',
        icon: <span className="text-2xl" role="img" aria-label="keychain">🔑</span>,
        prompt: 'Render the provided illustration as a high-quality, die-cut acrylic keychain charm. The character art should be flat, printed on clear acrylic with a glossy, protective finish. Attach a silver-colored metal D-clasp and key ring to the top of the charm. The keychain should be photographed lying flat on a clean, minimalist pastel-colored surface, with soft, diffused lighting to minimize glare and show off the glossy texture.'
    },
    {
        id: TransformationType.ACCESSORY,
        label: 'アクセサリー',
        icon: <span className="text-2xl" role="img" aria-label="accessory">💍</span>,
        prompt: 'Reimagine the provided illustration as a small, elegant enamel pin accessory. The design should be simplified with bold, clean metal lines (in a gold finish) and filled with vibrant, solid colors of hard enamel. The pin should be photorealistically rendered and shown pinned to the lapel of a textured fabric material like a denim jacket or a felt board. The lighting should be bright and direct to highlight the glossy enamel and shiny metal finish.'
    },
    {
        id: TransformationType.LINE_STICKER,
        label: 'LINEスタンプ',
        icon: <span className="text-2xl" role="img" aria-label="line sticker">💬</span>,
        prompt: 'Transform the provided illustration into a cute, deformed character illustration suitable for a LINE sticker. The character should be expressive and fun. Add a thick white border around the character for visibility. The style should be clean and simple, with a completely transparent background.'
    },
    {
        id: TransformationType.DISCORD_STICKER,
        label: 'Discordスタンプ',
        icon: <span className="text-2xl" role="img" aria-label="discord sticker">🎮</span>,
        prompt: 'Transform the provided illustration into a pop and meme-able illustration suitable for a custom Discord sticker. Deform the character and give it a very expressive or funny face and dynamic pose. Add a white border around the character. The background must be transparent.'
    },
];
