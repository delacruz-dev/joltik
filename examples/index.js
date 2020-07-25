/** @jsx j */
import { createElement, updateElement, j } from "../src";
import { Greeting } from "./greeting";
import { ListWithStyles } from "./list-with-styles";
import { List1, List2 } from "./lists";
import { Post } from "./post";
import { Counter } from "./counter";

// Counter example
const counter = document.getElementById("counter");
let count = 0;
let component = <Counter onClick={handleClick} count={count} />;

counter.appendChild(createElement(component));

function handleClick(value) {
  count = count + value;
  const update = <Counter onClick={handleClick} count={count} />;
  updateElement(counter, update, component);
  component = update;
}

// Static example
const st = document.getElementById("static");
st.appendChild(createElement(Post));

// Diffing example
const diffing = document.getElementById("diffing");
diffing.appendChild(createElement(List1));

document.getElementById("reload").addEventListener("click", () => {
  updateElement(diffing, List2, List1);
});

// Props example
const props = document.getElementById("props");
props.appendChild(createElement(ListWithStyles));

// Functional component
const functional = document.getElementById("functional");
functional.appendChild(createElement(<Greeting name={"Dani"} />));
