import { y, createElement } from "../";
/** @jsx y */

const Button = <button onClick={() => alert("yocto works!")}>Click me!</button>;

const Title = <h1>The title of the post</h1>;

const Post = (
  <article className="post">
    <Title />
    <p>Hello, world!</p>
    <Button />
  </article>
);

const root = document.getElementById("root");
Array.from(root.children).forEach(element => {
  root.removeChild(element);
});
root.appendChild(createElement(Post));
