import React, { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import Confetti from "react-confetti";

//import image
import Score from "../assets/images/score.png";
import RestartBtn from "../assets/images/restart-btn.png";
import loseIcon from '../assets/images/loseIcon.png'
import winIcon from '../assets/images/winIcon.png'
import christmas from '../assets/images/christmas.png'

const Result = () => {
  const { gameOver, gameWon, restartGame, score } = useContext(GameContext);

  if (!gameOver && !gameWon) return null;

  return (
    <div className=" absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-50 rounded-xl">
      <h1 className=" text-orange-300 mb-8">
        {gameOver ? (
          <div className="flex items-center">
            <p className=" text-5xl md:text-8xl font-bold">Game Over</p>
            <img src={loseIcon} alt="" className=" h-40" />
          </div>
        ) : gameWon ? (
            <div className="flex flex-col justify-center items-center">
              <img src={christmas} alt="" className=" h-40" />
            <p className=" text-5xl md:text-8xl font-bold">You Win</p>
            <img src={winIcon} alt="" className=" h-40" />
          </div>
        ) : (
          ""
        )}
      </h1>
      <div className=" flex items-center gap-3 mt-10">
        <img src={Score} alt="score" className=" w-10 h-10" />
        <p className=" text-4xl uppercase font-bold text-white ">
          Your Score :{" "}
          <span className="text-green-500 text-5xl"> {score} </span>{" "}
        </p>
      </div>

      <div className=" mt-10 flex justify-center items-center gap-3 bg-button-background bg-center bg-contain bg-no-repeat w-full h-[6rem]">
        <button onClick={restartGame} className="flex items-center gap-3">
          <img src={RestartBtn} alt="" className=" w-8 h-8" />
          <p className=" text-white md:text-lg font-bold">Replay</p>
        </button>
      </div>
      {gameWon && (
        <>
          <Confetti
            width={2000}
            height={1000}
            tweenDuration={5000}
            numberOfPieces={200}
            gravity={0.01}
            colors={["#f44336", "#00ff00", "#0000ff", "#ffff00", "#9c27b0"]}
          />
        </>
      )}
    </div>
  );
};

export default Result;
