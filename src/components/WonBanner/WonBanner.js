import React from 'react';
import Banner from '../Banner';

function WonBanner({ numOfGuesses, setAnswer }) {
  function handleClick() {
    setAnswer('');
    window.location.reload();
  }
  return (
    <>
      <Banner status="happy">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
        <button onClick={handleClick}>RESET</button>
      </Banner>
    </>
  );
}

export default WonBanner;
