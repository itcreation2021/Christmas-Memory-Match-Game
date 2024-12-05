import React, { createContext, useEffect, useRef, useState } from "react";

// Import icons
import ball from "../assets/images/icons/ball.png";
import bell from "../assets/images/icons/bell.png";
import calendar from "../assets/images/icons/calendar.png";
import giftbox from "../assets/images/icons/giftbox.png";
import reindeer from "../assets/images/icons/reindeer.png";
import santa from "../assets/images/icons/santa.png";
import snowman from "../assets/images/icons/snowman.png";
import tree from "../assets/images/icons/tree.png";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [cards, setCards] = useState([]); //cards array for the game
  const [flippedCards, setFlippedCards] = useState([]); // current flipped cards
  const [matchedPairs, setMatchedPairs] = useState([]); // store icons that have been matched
  const [showIcons, setShowIcons] = useState(true); // control whether icons are visible

  const [timeLeft, setTimeLeft] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const timerRef = useRef(null); // track of the timer
  const [score, setScore] = useState(0); // the player's score.

  //christmas icons array
  const christmasIcons = [
    ball,
    bell,
    calendar,
    giftbox,
    reindeer,
    santa,
    snowman,
    tree,
  ];

  useEffect(() => {
    const pairIcons = [...christmasIcons, ...christmasIcons]; // Duplicate the icons to create pairs

    const shuffledIcons = pairIcons.sort(() => Math.random() - 0.5); // random icon pairs

    // Map shuffled icons to card objects
    const cardItems = shuffledIcons.map((icon, index) => ({
      id: index,
      icon,
      flipped: false,
    }));

    setCards(cardItems);

    // hide all icons after 3 seconds
    setTimeout(() => {
      setShowIcons(false);
    }, 3000);

    // Timer logic to count down the remaining time
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          if (!gameWon) setGameOver(true); // Time up, game over
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timerRef.current);
  }, [gameWon]);

  // Function to handle card flips
  const flipCard = (index) => {
    if (flippedCards.length === 2) return; // Prevent flipping more than 2 cards

    // Flip card at the given index and update
    const updatedCards = [...cards];
    updatedCards[index].flipped = true;
    setCards(updatedCards);

    setFlippedCards((prev) => {
      const newFlippedCards = [...prev, index]; //new array by adding the current flipped card's index

      // 2 cards are currently flipped
      if (newFlippedCards.length === 2) {
        const [firstIndex, secondIndex] = newFlippedCards;

        if (updatedCards[firstIndex].icon === updatedCards[secondIndex].icon) {
          // new array by adding matched icon
          const newMatchedPairs = [
            ...matchedPairs,
            updatedCards[firstIndex].icon,
          ];
          setMatchedPairs(newMatchedPairs);

          // Check if all pairs are matched
          if (newMatchedPairs.length === cards.length / 2) {
            clearInterval(timerRef.current);

            // Delay the game won UI display by 1 second
            setTimeout(() => {
              setGameWon(true);
            }, 1000);

            setScore(timeLeft * 10); //score based on the remaining time
          }
        } else {
          setTimeout(() => {
            const resetCards = [...updatedCards];
            resetCards[firstIndex].flipped = false;
            resetCards[secondIndex].flipped = false;
            setCards(resetCards);
          }, 1000);
        }

        return [];
      }

      return newFlippedCards;
    });
  };

  // Function to restart the game
  const restartGame = () => {
    window.location.reload();
  };

  return (
    <GameContext.Provider
      value={{
        cards,
        flipCard,
        matchedPairs,
        showIcons,

        timeLeft,
        gameOver,
        gameWon,
        restartGame,
        score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
