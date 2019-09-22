import homepage from './homepage.js'
import itempage from './itempage.js'
import React from 'react'
import ReactDOM from 'react-dom'

const node = document.getElementById("app")

ReactDOM.render(
    React.createElement(
        "button",
        {},
        "I am a button, Hello World!"
    ),
    node,
)

// window.addEventListener("load", () =>{
//     homepage.setUp()
//     itempage.setUp()
// })
  