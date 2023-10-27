import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <p key={i} className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;
