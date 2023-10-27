import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { range } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [tentativeGuess, setTentativeGuess] = useState('');
  const [list, setList] = useState([]);

  return (
    <>
      <GuessInput
          tentativeGuess={tentativeGuess}
          setTentativeGuess={setTentativeGuess}
          list={list}
          setList={setList}
        />
      <GuessResults />
    </>
  );
}

export default Game;
