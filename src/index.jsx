import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "./components/Header.jsx"

import Homepage from "./pages/Homepage.jsx"
import ItemPage from "./pages/Itempage.jsx"
import LandingPage from "./pages/Landingpage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import UserPage from "./pages/UserPage.jsx"
import Cookies from 'universal-cookie';

const node = document.getElementById("app")

class App extends React.Component{
    constructor(props){
        super(props)

        const cookies = new Cookies();
        const displayCookie = cookies.get('mycockycookie') || null   

        this.state={
            token: null,
            user: {
                email       : null,
                _id         : null,
                createdAt   : null
            },
            cookie: displayCookie
        }
        this.handleCookie = this.handleCookie.bind(this)
    }
    

    PrivateRoute = ({component,  path}) =>{
        const renderLogic = () => {
            const cookieExists = (this.state.cookie !== null);
            return cookieExists 
                    ? component //<Component {...props} /> 
                : <Redirect to={{pathname: '/items'}} />
        }
        return (
          <Route
            path = {path}
            render={ renderLogic }
            />
        )
    }


    handleLogin = ({token, user}) => {
        this.setState({
            user, token
        })
    }

    handleLogOut = () => {
        const cookies = new Cookies();
        cookies.remove('mycockycookie')
        this.setState({
            user: {
                email       : null,
                _id         : null,
                createdAt   : null
            },            
            token: null,
            cookie: null
        })
    }

    handleCookie = (token) => {
        const cookies = new Cookies();
        cookies.set('mycockycookie', token, { path: '/' })
        const cookMe = cookies.get('mycockycookie')
        this.setState({
            cookie: cookMe
        })
    }

    render(){
        return(

        <BrowserRouter>

            {/*------------------------ PUBLIC ROUTES ------------------------*/}

            <Route path={"/"} 
            render = {(props) => 
            <Header {...props} token = {this.state.token} user = {this.state.user} onLogout = {this.handleLogOut}/>} 
            />

            <Route path="/login"         
            exact 
            render = {(props) => 
            <LoginPage {...props} onLogin = {this.handleLogin} handleCookie={this.handleCookie}  />  }   
            />   
      
            <Route path="/signup"        exact component = {SignupPage}  />
            <Route path="/"              exact component = {LandingPage} />
            <Route path="/items"         exact component = {Homepage}    />
            <Route path="/items/:itemId" exact component = {ItemPage}    />



            {/*------------------------ PRIVATE ROUTES ------------------------*/}

            <this.PrivateRoute path="/users/:userId" component ={ <UserPage user = {this.state.user} />}/>             
      
        </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    node
)

