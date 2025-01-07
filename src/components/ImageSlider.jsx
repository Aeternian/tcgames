import React from 'react';

export default function ImageSlider({ games }) {
  return (
    <div className="slider-container">
      {games.map(game => (
        <div key={game.juego_id} className="slider-item">
          <img src={game.juego_imgs} alt={game.juego_nombre} className="rounded" />
        </div>
      ))}
    </div>
  );
}
