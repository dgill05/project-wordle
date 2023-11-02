import React from 'react';

function GuessInput({
  tentativeGuess,
  setTentativeGuess,
  handleSubmitGuess,
  win,
  guesses,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('guess: ', tentativeGuess);
    handleSubmitGuess(tentativeGuess);
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
          disabled={win || guesses.length >= 6}
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
