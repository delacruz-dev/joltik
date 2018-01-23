export function y(type, props, ...args) {
  const children = args.length ? [].concat(...args) : null;
  return {
      type,
      props,
      children
  }
}

function setProp(node, name, value) {
  if (name === 'className') {
      name = 'class'
  }

  node.setAttribute(name, value);
}

function setProps (node, props = {}) {
  if (!props) {
    return
  }
  Object.keys(props).forEach(name => setProp(node, name, props[name]))
}

export function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }
  
  if (typeof node.type === 'object') {
    return createElement(node.type)
  }

  const element = document.createElement(node.type)
  setProps(element, node.props)
  node.children
    .map(createElement)
    .forEach(child => element.appendChild(child))
  return element
}