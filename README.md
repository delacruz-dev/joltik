# joltik

A micro VDOM library for learning purposes

## Description

I'm just learning how a VDOM (Virtual Document Object Model) library works by building one and documenting my learnings in medium. I don't pretend this to be nothing serious, so please don't use it in production.

## Installation

```
$ npm install joltik --save
```

### Configuring JSX pragma

By default, [Babel] transforms your JSX code into a call to `React.createElement`. You can customize this behaviour by adding a **jsx pragma** at the top of your files, with the following syntax:

```js
/** @jsx j */
```

Wher `j` here is joltik's replacement for `React.createElement`. You can read more about this behaviour in [@developit](https://github.com/developit)'s blog post: [WTF Is JSX](https://jasonformat.com/wtf-is-jsx/).

### Configuring Babel

You will need to install Babel's [transform react jsx plugin](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) in order to support JSX syntax only, instead of the full preset you normally would use for React.

Here's a sample of the bare minimum `.babelrc` config you will need:

```json
{
  "presets": ["env"],
  "plugins": ["transform-react-jsx"]
}
```

It is very convenient to replace your pragma everywhere by defoult, to avoid adding it as a comment at the top of your files. In order to do so, add the following config to the plugin:

```
{
    ...
    "plugins": [
        ["@babel/plugin-transform-react-jsx", {
            "pragma": "j"
        }]
    ]
}
```

### Creating your first component

The syntax is similar to a usual React component, with the only difference of importing `j` from joltik.

```jsx
// HelloWorld.js
import { j } from "joltik";
import "./styles.css";

export const HelloWorld = ({ text }) => <h1 className="title">{text}</h1>;
```

To render an element, you would do:

```jsx
// index.js
import { j, createElement } from "joltik";
import { HelloWolrd } from "./HelloWorld";

document
  .getElementById("app")
  .appendChild(createElement(<Hello text="Hello, joltik!" />));
```

## Demo

You can see a working demo in [this codesandbox](https://codesandbox.io/s/93474k06xr) and also in the [examples folder](https://github.com/d4nidev/joltik/tree/master/examples).

## Why Joltik?

![joltik]

[Joltik](<https://bulbapedia.bulbagarden.net/wiki/Joltik_(Pok%C3%A9mon)>) is the smallest Pokémon from all the current editions.

## References

- [How to write your own Virtual DOM](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)
- [WTF is JSX](https://jasonformat.com/wtf-is-jsx/)

[joltik]: https://cdn.bulbagarden.net/upload/e/e7/Spr_5b_595.png
