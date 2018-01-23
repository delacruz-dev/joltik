export function y(type, props, ...args) {
    const children = args.length ? [].concat(...args) : null;
    return {
        type,
        props,
        children
    }
}

export function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node)
  }
  
  if (typeof node.type === 'object') {
    return createElement(node.type)
  }

  const element = document.createElement(node.type)
  node.children
    .map(createElement)
    .forEach(child => element.appendChild(child))
  return element
}