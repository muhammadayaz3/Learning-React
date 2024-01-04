import { useState } from "react";

const squares = [null, null, null, null, null, null, null, null, null];
const nextSquares = ['X', null, null, null, null, null, null, null, null];

function Square({value,OnSquareClick}) {
  /*const [count, SetValue] = useState(null);

  
  function handleClick() {
    SetValue('X');
  }
*/
  return (
    <button className="square" onClick={OnSquareClick}>
        {value}
    </button>
  );
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function handleClick(i) {
        if(squares[i] || Winner(squares)){return;}

        const nextSquares=squares.slice();
        if(xIsNext){
            nextSquares[i]="X";
        }else{
            nextSquares[i]="O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }

      const winner=Winner(squares);
      let status;
      if(winner){
        status="Winner: " + winner;
      }else{
        status ="Next payer: " + (xIsNext ? "X" : "O");
      }

  
    return (
    <>
        <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} OnSquareClick={() =>handleClick(0)}/>
        <Square value={squares[1]} OnSquareClick={() =>handleClick(1)}/>
        <Square value={squares[2]} OnSquareClick={() =>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} OnSquareClick={() =>handleClick(3)}/>
        <Square value={squares[4]} OnSquareClick={() =>handleClick(4)}/>
        <Square value={squares[5]} OnSquareClick={() =>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} OnSquareClick={() =>handleClick(6)}/>
        <Square value={squares[7]} OnSquareClick={() =>handleClick(7)}/>
        <Square value={squares[8]} OnSquareClick={() =>handleClick(8)}/>
      </div> 
    </>
  );
}


function  Winner(square){
    const array = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < array.length; i++) {
        const [a,b,c] = array[i];
        if(square[a] && square[a] === square[b] && square[a] === square[c]){
            return square[a];
        }
    }
    return null;
}