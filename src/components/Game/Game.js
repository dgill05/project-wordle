import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running');
  const [tentativeGuess, setTentativeGuess] = useState('');
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const next = [...guesses, tentativeGuess];
    setGuesses(next);
    setTentativeGuess('');
    console.log('list: ', next);

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (next.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
