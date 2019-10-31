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

class App extends React.Component{
    state={
        token: null,
        user: {
            email       : null,
            _id         : null,
            createdAt   : null
        }
    }

    handleLogin = ({token, user}) => {
        this.setState({
            user, token
        })
    }

    render(){
        return(
        <BrowserRouter>
            <Route path={"/"} 
            render = {(props) => 
            <Header {...props} token = {this.state.token} user = {this.state.user}/>} 
            />
            <Route path="/signup"        exact component = {SignupPage}  />
            <Route path="/login"         
            exact 
            render = {(props) => <LoginPage {...props} onLogin = {this.handleLogin}  />  }   />                
            <Route path="/users/:userId" exact 
            render = {(props) => <UserPage {...props} user = {this.state.user} />}    
            />
            <Route path="/"              exact component = {LandingPage} />
            <Route path="/items"         exact component = {Homepage}    />
            <Route path="/items/:itemId" exact component = {ItemPage}    />
        </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    node
)

