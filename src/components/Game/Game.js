import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [tentativeGuess, setTentativeGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [win, setWin] = useState(false);

  function handleSubmitGuess(tentativeGuess) {
    const next = [...guesses, tentativeGuess];
    setGuesses(next);
    setTentativeGuess('');
    console.log('list: ', next);

    if (tentativeGuess === answer && !win) {
      setWin(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        win={win}
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
        handleSubmitGuess={handleSubmitGuess}
        guesses={guesses}
      />
      {win ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} guesses</strong>.
          </p>
        </div>
      ) : null}
      {guesses.length >= 6 ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Game;
