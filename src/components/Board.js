import {useEffect, useState} from 'react';
import Box from './Box';

const Board = () => {
  const [boardValues, setBoardValues] = useState([ '   '.split(''), '   '.split(''), '   '.split('') ])
  const [turn, setTurn] = useState(false);

  console.log(boardValues);

  const boxClick = (row, col) => {
    if (boardValues[row][col] !== ' ') {
      return boardValues[row][col];
    }
    boardValues[row][col] = turn ? 'X' : 'O';
    setBoardValues(boardValues);
    setTurn(!turn);
    return boardValues[row][col];
  }

  return <div>
    It is player {turn ? 2 : 1}'s turn.

    {boardValues.map((boardRowValues, idx1) => {
      return <div key={idx1} className="flex">{boardRowValues.map((value, idx2) => <Box key={idx2} row={idx1} col={idx2} value={value} boxClick={boxClick} />)}</div>;
    })}
  </div>;
}

export default Board;