/** @jsx y */
import { y } from "../src";

const List1 = (
  <ul>
    <li>non changing list item</li>
    <li>changing list item</li>
  </ul>
);

const List2 = (
  <ul>
    <li>non changing list item</li>
    <li>changed by yocto diffing!</li>
  </ul>
);

export { List1, List2 };
