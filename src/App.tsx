import React, { useState } from 'react';
import Button from './components/Button';
import UnoGame from './components/UnoGame';

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleButtonClick = () => {
    // Simulating image generation (replace this with your actual image URLs)
    const newImages: string[] = [
      'https://via.placeholder.com/150',
    ];
    setImages(newImages);
  };

  return (
    <div>
      <UnoGame></UnoGame>
    </div>
  );
};

export default App;
