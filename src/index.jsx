import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom";


import Homepage from "./Homepage.jsx"
import ItemPage from "./Itempage.jsx"
import LandingPage from "./Landingpage.jsx"

const node = document.getElementById("app")

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/items" exact component = {Homepage} />
        <Route path="/items/:itemId" exact component={ItemPage}  />
    </BrowserRouter>,
    node
)

