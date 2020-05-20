/**
 * joltik's JSX pragma
 * @param {*} type
 * @param {*} props
 * @param  {...any} args
 */
export function j(type, props, ...args) {
  const children = args.length ? [].concat(...args) : null;
  return {
    type,
    props: props || {},
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
  } else if (typeof value === "boolean") {
    setBooleanProp(node, name, value);
  }

  node.setAttribute(name, value);
}

function setBooleanProp(node, name, value) {
  if (value) {
    node.setAttribute(name, value);
    node[name] = true;
  } else {
    node[name] = false;
  }
}

function setAttributes(node, props = {}) {
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

/**
 * Creates a DOM node.
 * @param {*} node
 */
export function createElement(node) {
  // Text nodes can be created stright away, and can't have children or attributes.
  if (typeof node === "string" || typeof node === "number") {
    return document.createTextNode(node);
  }

  // Object nodes are new tags, and it needs to be considered a new element.
  // the function uses recursion to parse this object.
  if (typeof node.type === "object") {
    return createElement(node.type);
  }

  // A functional component is parameterized. It just needs
  // to call the function with the props as the arguments.
  if (typeof node.type === "function") {
    return createElement(node.type(node.props));
  }

  const element = document.createElement(node.type);

  // Sets the element attributes
  setAttributes(element, node.props);

  // Event listeners are threated independently
  addEventListeners(element, node.props);

  // Uses recursion to render its children, if any
  node.children &&
    node.children
      .map(createElement)
      .forEach(child => element.appendChild(child));

  return element;
}

/**
 * Updates a DOM node.
 * @param {*} parentNode
 * @param {*} newNode
 * @param {*} oldNode
 * @param {*} index
 */
export function updateElement(parentNode, newNode, oldNode, index = 0) {
  if (newNode && typeof newNode.type === "function") {
    newNode = newNode.type(newNode.props);
  }

  if (oldNode && typeof oldNode.type === "function") {
    oldNode = oldNode.type(oldNode.props);
  }

  // If the old node doesn't exist, it adds the new one to the parent.
  if (oldNode === undefined || oldNode === null) {
    parentNode.appendChild(createElement(newNode));
    // If the new node doesn't exist, it removes it from the parent.
  } else if (oldNode === undefined || oldNode === null) {
    parentNode.removeChild(parentNode.childNodes[index]);
    // If the nodes have changed, it replaces the old one with its new version.
  } else if (nodesAreDifferent(newNode, oldNode)) {
    parentNode.replaceChild(
      createElement(newNode),
      parentNode.childNodes[index]
    );
  } else if (newNode.type) {
    const newLength = newNode.children ? newNode.children.length : 0;
    const oldLength = oldNode.children ? oldNode.children.length : 0;

    // Recursively updates its children
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        parentNode.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
}

/**
 * Compares two DOM nodes to decide if they are different.
 * @param {*} first
 * @param {*} second
 */
function nodesAreDifferent(first, second) {
  return (
    typeof first !== typeof second ||
    ((typeof first === "string" || typeof first === "number") &&
      first !== second) ||
    first.type !== second.type
  );
}
