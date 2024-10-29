import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  // Increase counter with a max limit of 100
  const increase = () => {
    if (count < 100) setCount(count + 1);
  };

  // Decrease counter with a min limit of 0
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  // Reset counter to 0
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={increase} disabled={count === 100}>
          Increase
        </button>
        <button onClick={decrease} disabled={count === 0}>
          Decrease
        </button>
        <button onClick={reset}>Reset</button>
      </div>
      
      {/* Display feedback for boundary values */}
      {count === 0 && <p className="feedback">Counter at min.</p>}
      {count === 100 && <p className="feedback">Counter at max.</p>}
    </div>
  );
}

export default Counter;
