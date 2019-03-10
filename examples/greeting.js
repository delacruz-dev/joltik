/** @jsx j */
import { j } from "../src";

/**
 * A functional component, receiving parameters as props
 * @param {string} props.name
 */
const Greeting = ({ name }) => <div>Hello, {name}!</div>;

export { Greeting };
