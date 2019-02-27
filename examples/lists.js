/** @jsx j */
import { j } from "../src";

const List1 = (
  <ul>
    <li>non changing list item</li>
    <li>changing list item</li>
  </ul>
);

const List2 = (
  <ul>
    <li>non changing list item</li>
    <li>changed by joltik diffing!</li>
  </ul>
);

export { List1, List2 };
