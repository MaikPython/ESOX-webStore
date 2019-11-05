import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header.jsx"
import Cookies from 'universal-cookie';

import Homepage from "./pages/Homepage.jsx"
import ItemPage from "./pages/Itempage.jsx"
import LandingPage from "./pages/Landingpage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import UserPage from "./pages/UserPage.jsx"
import Notfoundpage from './pages/Notfoundpage.jsx'

const cookies = new Cookies()

const authDefaultValue = {
    token: null,
    user: {
        email       : null,
        _id         : null,
        createdAt   : null
    },
    cookie: cookies.get('mycockycookie') || null  
}

export const AuthContext = React.createContext(authDefaultValue)

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = authDefaultValue
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
        <AuthContext.Provider value = {this.state}>
            <BrowserRouter>
                <Route path={"/"} component={Header} />
                <Switch>
                    {/*------------------------ PUBLIC ROUTES ------------------------*/}

                    <Route path="/items"         exact component = {Homepage}     />
                    

                    <Route path="/login"         
                    exact 
                    render = {(props) => 
                    <LoginPage {...props} onLogin = {this.handleLogin} handleCookie={this.handleCookie}  />  }   
                    />   

                    <Route path="/signup"        exact component = {SignupPage}   />
                    <Route path="/"              exact component = {LandingPage}  />
                    <Route path="/items/:itemId" exact component = {ItemPage}     />
                    {/* <Route path="*"              exact component = {Notfoundpage} /> */}


                    {/*------------------------ PRIVATE ROUTES ------------------------*/}

                    <Route path="/users/:userId" component ={UserPage}/>   
                    <Route component={Notfoundpage} />

                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
        )
    }
}

const node = document.getElementById("app")


ReactDOM.render(
    <App />,
    node
)

