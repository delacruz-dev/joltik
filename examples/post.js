/** @jsx j */
import { j } from "../src";
import { Button } from "./button";
import { Title } from "./title";

/**
 * A complex JSX element, non parameterized, with attributes and nested children
 */
const Post = (
  <article class="post">
    <Title />
    <p>Hello, world!</p>
    <Button />
  </article>
);

export { Post };
