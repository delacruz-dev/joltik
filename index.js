export function y(type, props, ...args) {
  const children = args.length ? [].concat(...args) : null;
  return {
    type,
    props,
    children
  };
}

function isEventProp(name) {
  return /^on/.test(name);
}

function extractEventName(name) {
  return name.slice(2).toLowerCase();
}

function setProp(node, name, value) {
  if (name === "className") {
    name = "class";
  }

  node.setAttribute(name, value);
}

function setProps(node, props = {}) {
  if (!props) {
    return;
  }
  Object.keys(props)
    .filter(prop => !isEventProp(prop))
    .forEach(name => setProp(node, name, props[name]));
}

function addEventListeners(node, props = {}) {
  if (!props) {
    return;
  }
  Object.keys(props)
    .filter(isEventProp)
    .forEach(event =>
      node.addEventListener(extractEventName(event), props[event])
    );
}

export function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  if (typeof node.type === "object") {
    return createElement(node.type);
  }

  const element = document.createElement(node.type);
  setProps(element, node.props);
  addEventListeners(element, node.props);
  node.children.map(createElement).forEach(child => element.appendChild(child));
  return element;
}
