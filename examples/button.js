/** @jsx y */
import { y } from "../src";

/**
 * A basic JSX component, non parameterized, with attributes
 */
const Button = <button onClick={handleClick}>Click me!</button>;

function handleClick() {
  alert("yocto works!");
}

export { Button };
