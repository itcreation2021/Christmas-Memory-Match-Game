import React from "react";
import GameContextProvider from "./context/GameContextProvider";

import GameBoard from "./components/GameBoard";
import ButtonMenu from "./components/ButtonMenu";
import Result from "./components/Result";

const App = () => {
  return (
    <GameContextProvider>
      <main className="relative bg-app-banner bg-center bg-cover h-screen w-screen flex justify-center items-center">
        <div className="flex justify-center items-center bg-gameboard-background bg-center bg-contain bg-no-repeat w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem]">
          <GameBoard />
        </div>
        <ButtonMenu />
        <Result />
      </main>
    </GameContextProvider>
  );
};

export default App;
