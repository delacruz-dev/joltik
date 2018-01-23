import { y, createElement } from '../'
/** @jsx y */

const Button = <button onClick={() => alert('yocto works!')}>Click me!</button>

const helloWorld = (
    <div className='hello'>
        Hello, world!
        <Button />
    </div>
)

const root = document.createElement('div')
root.appendChild(createElement(helloWorld))
document.body.appendChild(root)
