import React from "react";
import GameContextProvider from "./context/GameContextProvider";

import GameBoard from "./components/GameBoard";
import ButtonMenu from "./components/ButtonMenu";
import Result from "./components/Result";

const App = () => {
  return (
    <GameContextProvider>
      <main className="relative w-screen h-screen flex justify-center items-center bg-app-banner bg-center bg-cover">
        <div className="flex justify-center items-center w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem] bg-gameboard-background bg-center bg-contain bg-no-repeat">
          <GameBoard />
        </div>
        <ButtonMenu />
        <Result />
      </main>
    </GameContextProvider>
  );
};

export default App;
