import React, { useState } from 'react';

function GuessInput({ tentativeGuess, setTentativeGuess, list, setList }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('guess: ', tentativeGuess);
    const next = [...list, tentativeGuess];
    setList(next);
    setTentativeGuess('');
    console.log('list: ', next);
    setSubmitted(true);
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">
          Enter guess:
          {tentativeGuess}
        </label>
        <input
          required
          id="guess-input"
          type="text"
          maxLength="5"
          minLength="5"
          pattern="[a-zA-Z]{5}"
          title="Please enter up to 5 numbers."
          value={tentativeGuess}
          onChange={(e) => {
            const nextGuess = e.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
