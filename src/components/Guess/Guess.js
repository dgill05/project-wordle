import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const status = checkGuess(value, answer);
  console.log(status)
  return (
    <p className="guess">
      {range(5).map((num) => (
        
        <span key={num} class={`cell ${status && status[num].status}`}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
