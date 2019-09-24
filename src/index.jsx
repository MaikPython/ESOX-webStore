import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from "react-router-dom";


import Homepage from './Homepage.jsx'
import ItemPage from './Itempage.jsx'


const node = document.getElementById("app")

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={Homepage}  />
        <Route path="/item" exact component={ItemPage}  />
    </BrowserRouter>,
    node
)

