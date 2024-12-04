import React, { useContext } from 'react'
import RestartBtn from "../assets/images/restart-btn.png";
import ClockBtn from "../assets/images/clock.png";
import { GameContext } from '../context/GameContextProvider';

const ButtonMenu = () => {

    const { timeLeft, restartGame } = useContext(GameContext);

  return (
    <div className="absolute md:right-[10rem] top-[35rem] md:top-[20rem] flex flex-col items-start w-[18rem]">
      <div className="flex justify-center  items-center gap-3 bg-button-background bg-center bg-contain bg-no-repeat w-full h-[5rem]">
        <img src={ClockBtn} alt="" className=" h-10" />
        <p className=" text-white md:text-lg font-bold">{timeLeft} secs</p>
      </div>

      <div className="flex justify-center items-center gap-3 bg-button-background bg-center bg-contain bg-no-repeat w-full h-[5rem]">
        <button onClick={restartGame} className="flex items-center gap-3">
          <img src={RestartBtn} alt="" className=" w-8 h-8" />
          <p className=" text-white md:text-lg font-bold">Replay</p>
        </button>
      </div>
    </div>
  );
}

export default ButtonMenu