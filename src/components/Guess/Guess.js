import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status, winner }) {
  const newClass = status ? `cell ${status}` : `cell`;
  return <span className={newClass}>{letter}</span>;
}

function Guess({ value, answer }) {
  const status = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          status={status ? status[num].status : null}
          letter={status ? status[num].letter : null}
        />
      ))}
    </p>
  );
}

export default Guess;
