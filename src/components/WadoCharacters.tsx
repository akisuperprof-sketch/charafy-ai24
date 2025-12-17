import React from 'react';

// Character images encoded as Base64 for portability

export const ChristmasWado: React.FC<{ className?: string }> = ({ className }) => (
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0icmVkIiAvPjwvc3ZnPg==" alt="Cute Wado Character with hot chocolate" className={className} />
);

export const WizardWado: React.FC<{ className?: string }> = ({ className }) => (
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0icHVycGxlIiAvPjwvc3ZnPg==" alt="Wizard Wado Character" className={className} />
);

export const ArtistWado: React.FC<{ className?: string }> = ({ className }) => (
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iYmx1ZSIgLz48L3N2Zz4=" alt="Artist Wado Character" className={className} />
);

export const ComicWado: React.FC<{ className?: string }> = ({ className }) => (
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ieWVsbG93IiAvPjwvc3ZnPg==" alt="Comic Wado Character" className={className} />
);
