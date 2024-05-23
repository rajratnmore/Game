import React, { useState } from "react";
const crossBoxGame = [
  { id: 1, color: "white" },
  { id: 2, color: "white" },
  { id: 3, color: "white" },
  { id: 4, color: "white" },
  { id: 5, color: "white" },
  { id: 6, color: "white" },
  { id: 7, color: "white" },
  { id: 8, color: "white" },
  { id: 9, color: "white" },
];
const App = () => {
  const [cardList, setCardList] = useState(JSON.parse(JSON.stringify(crossBoxGame)));
  const [crossBox, setCrossBox] = useState(true);

  const handleBtnClick = (id) => {
    const winningResult = isWonGame();
    if (winningResult !== null) {
      alert(winningResult + " colored player won the game");
      return;
    }
    const filteredArray = cardList.map((card) => {
      if (card.id === id && card.color === "white") {
        card.color = crossBox ? "lightblue" : "lightpink";
        setCrossBox(!crossBox);
      }
      return card;
    });
    setCardList(filteredArray);
  };

  const isWinner = (isWinArr) => {
    for (let i = 1; i < isWinArr.length; i++) {
      if (isWinArr[0].color === "white" || isWinArr[0].color !== isWinArr[i].color) {
        return false;
      }
    }
    return true;
  };

  const isWonGame = () => {
    const winArr = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let i = 0; i < winArr.length; i++) {
      const currWinArr = winArr[i];
      const isWinArr = currWinArr.map((index) => cardList[index]);
      if (isWinner(isWinArr)) {
        return isWinArr[0].color;
      }
    }
    return null;
  };

  const handleResetGame = () => {
    setCardList(JSON.parse(JSON.stringify(crossBoxGame)));
    setCrossBox(true);
  };

  return (
    <>
      <div className="bg-slate-200 w-[600px] p-4 grid grid-cols-3">
        {cardList.map((card) => (
          <div
            key={card.id}
            className="bg-slate-400 w-40 h-40 m-2 cursor-pointer"
            style={{ background: card.color }}
            onClick={() => {
              handleBtnClick(card.id);
            }}
          ></div>
        ))}

        <button className=" bg-slate-900 text-white py-2 px-4 rounded-md mx-auto" onClick={handleResetGame}>
          reset game
        </button>
      </div>
    </>
  );
};

export default App;
