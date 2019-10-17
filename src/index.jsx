import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header.jsx"

import Homepage from "./pages/Homepage.jsx"
import ItemPage from "./pages/Itempage.jsx"
import LandingPage from "./pages/Landingpage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import UserPage from "./pages/UserPage.jsx"

const node = document.getElementById("app")

ReactDOM.render(
    <BrowserRouter>
        <Route path={"/"}                  component = {Header}      />
        <Route path="/signup"        exact component = {SignupPage}  />
        <Route path="/login"         exact component = {LoginPage}   />                
        <Route path="/users/:userId" exact component = {UserPage}    />
        <Route path="/"              exact component = {LandingPage} />
        <Route path="/items"         exact component = {Homepage}    />
        <Route path="/items/:itemId" exact component = {ItemPage}    />
    </BrowserRouter>,
    node
)

