import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState('');

  return (
    <>
      Put a game here!
      <div className="game-wrapper">
        <div className="guess-results">
          <p className="guess">
            <span className="cell">R</span>
            <span className="cell misplaced">A</span>
            <span className="cell misplaced">T</span>
            <span className="cell incorrect">E</span>
            <span className="cell incorrect">S</span>
          </p>
          <p className="guess">
            <span className="cell correct">A</span>
            <span className="cell correct">B</span>
            <span className="cell correct">O</span>
            <span className="cell incorrect">V</span>
            <span className="cell incorrect">E</span>
          </p>
          <p className="guess">
            <span className="cell correct">A</span>
            <span className="cell correct">B</span>
            <span className="cell correct">O</span>
            <span className="cell correct">U</span>
            <span className="cell correct">T</span>
          </p>
          <p className="guess">
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
          <p className="guess">
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
          <p className="guess">
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
        </div>

        <form className="guess-input-wrapper">
          <label htmlFor="guess-input">
            Enter guess:
            {guess}
          </label>
          <input
            id="guess-input"
            type="text"
            maxlength="5"
            title="Please enter up to 5 numbers."
            value={guess}
            onChange={(e) => {
              const nextGuess = e.target.value.toLocaleUpperCase();
              setGuess(nextGuess);
            }}
          />
        </form>

        {/* <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div> */}
      </div>
    </>
  );
}

export default Game;
