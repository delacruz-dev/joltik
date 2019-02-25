/** @jsx y */
import { y } from "../src";

/**
 * A list component with different types of arguments (props)
 */
const ListWithStyles = (
  <ul style="list-style: none;">
    <li className="item">item 1</li>
    <li className="item">
      <input type="checkbox" checked />
      <input type="text" disabled />
    </li>
  </ul>
);

export { ListWithStyles };
