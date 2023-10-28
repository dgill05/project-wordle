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

  function handleSubmitGuess(tentativeGuess) {
    console.log('received guess: ', tentativeGuess);
    const next = [...guesses, tentativeGuess];
    setGuesses(next);
    setTentativeGuess('');
    console.log('list: ', next);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
