import { createElement, updateElement } from "../src";
import { Post } from "./post";
import { List1, List2 } from "./lists";
import { ListWithStyles } from "./list-with-styles";

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
