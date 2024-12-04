import React, { useContext } from 'react'
import IconCard from './IconCard';
import { GameContext } from '../context/GameContextProvider';

const GameBoard = () => {

    const { cards } = useContext(GameContext);

  return (
    <div className="absolute top-[16rem] md:top-[15rem]  gap-3 grid grid-cols-4">
      {cards.map((icon, index) => (
        <IconCard key={index} iconId={index} />
      ))}
    </div>
  );
}

export default GameBoard