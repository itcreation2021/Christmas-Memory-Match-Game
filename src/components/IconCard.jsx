import React, { useContext } from 'react'
import { GameContext } from '../context/GameContextProvider';
import "./IconCard.css";

const IconCard = ({ iconId }) => {
  const { cards, flipCard, showIcons } = useContext(GameContext);
  const card = cards[iconId];

  const handleClick = () => {
    if (!card.flipped && !showIcons) {
      flipCard(iconId);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="relative w-[4rem] h-[4rem] md:w-[4.5rem] md:h-[4.5rem] flex justify-center items-center cursor-pointer perspective-1000">
      <div
        className={`flip-card-inner ${
          card.flipped || showIcons ? "flip-card-flipped" : ""
        }`}
      >
        <div className="flip-card-front bg-white flex justify-center items-center rounded-full">
          <p className="text-3xl font-bold text-red-600">?</p>
        </div>
        <div className="flip-card-back bg-ball-background bg-center bg-cover flex justify-center items-center">
          <img src={card.icon} alt={card.icon} className=" w-14 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default IconCard