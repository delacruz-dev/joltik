/** @jsx j */
import { j } from "../src";

export function Counter({ count = 0, onClick = () => {} } = {}) {
  const increment = () => {
    onClick(+1);
  };

  const decrement = () => {
    onClick(-1);
  };

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
