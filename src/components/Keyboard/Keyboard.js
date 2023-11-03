import React from 'react';
import { row1, row2, row3 } from '../../constants';

function Keyboard({ guessStatus }) {
  return (
    <div className="keyboard">
      <div className="row">
        {row1.map((key) => (
          <span key={key} className={guessStatus[key]}>
            {key}
          </span>
        ))}
      </div>
      <div className="row">
        {row2.map((key) => (
          <span key={key} className={guessStatus[key]}>
            {key}
          </span>
        ))}
      </div>
      <div className="row">
        {row3.map((key) => (
          <span key={key} className={guessStatus[key]}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
