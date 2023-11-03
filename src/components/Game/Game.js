import React, { useState } from 'react';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running');
  const [tentativeGuess, setTentativeGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [guessStatus, setGuessStatus] = useState({});


  function handleSubmitGuess(tentativeGuess) {
    const next = [...guesses, tentativeGuess];
    setGuesses(next);
    setTentativeGuess('');
    console.log('list: ', next);

    const currentGuessStatus = checkGuess(tentativeGuess, answer);

    const nextGuessStatus = {...guessStatus}

    tentativeGuess.split('').forEach((letter, index) => (
      nextGuessStatus[letter] = currentGuessStatus[index].status
    ))

    setGuessStatus(nextGuessStatus)

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
      <Keyboard guessStatus={guessStatus}/>
      <GuessInput
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
