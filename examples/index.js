import { y, createElement } from '../'
/** @jsx y */

const helloWorld = <div className='hello'>Hello, world!</div>

const root = document.createElement('div')
root.appendChild(createElement(helloWorld))
document.body.appendChild(root)
