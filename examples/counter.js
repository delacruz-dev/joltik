/** @jsx j */
import { j } from "../src";

export function Counter({ count = 0, onClick = () => {} } = {}) {
  const increment = () => {
    onClick(+1);
  };

  return (
    <div>
      <h4>Count: {count.toString()}</h4>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
