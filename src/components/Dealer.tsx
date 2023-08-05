// src/components/Dealer.tsx

import React, { useState } from 'react';
import shuffle from 'shuffle-array';
import { Card, Deck } from '../card_types';
import generateUNOCards from '../utils';
import ImageColumn from "./ImageColumn";


const Dealer: React.FC = () => {
  const [deck, setDeck] = useState<Deck>(generateUNOCards());

  const [columns, setColumns] = useState<string[][]>([[]]);
  const handleAddImage = () => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      newColumns[0].push(
        `https://dcblog.b-cdn.net/wp-content/uploads/2021/02/Full-form-of-URL-1-1024x824.jpg`
      );
      return newColumns;
    });
  };

  const handleDeal = () => {
    if (deck.length === 0) {
      alert('The deck is empty!');
      return;
    }

    const dealtCard = deck.pop();
    // Implement logic to handle dealing the card to players/hands
    console.log('Dealt Card:', dealtCard);
    setDeck([...deck]); // Update state to trigger a re-render
  };

  return (
    <div>
      <button onClick={handleDeal}>Deal Card</button>
      <button onClick={handleAddImage}>Add Image</button>
      {columns.map((column, index) => (
        <ImageColumn key={index} images={column} />
      ))}
    </div>
  );
};

export default Dealer;
