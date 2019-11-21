import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx"
import Cookies from 'universal-cookie';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer, toast } from 'react-toastify';

import Homepage from "./pages/Homepage.jsx"
import ItemPage from "./pages/Itempage.jsx"
import LandingPage from "./pages/Landingpage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import UserPage from "./pages/UserPage.jsx"
import Notfoundpage from './pages/Notfoundpage.jsx'
import ShoppingCartPage from './pages/ShoppingCartPage.jsx'

// const cookies = new Cookies()

const {store, persistor} = configureStore()




class App extends React.Component{
    constructor(props){
        super(props)
        // this.handleCookie = this.handleCookie.bind(this)
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
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_LEFT} />
                    <BrowserRouter>
                        <Route path={"/"} component={Header} />
                        <Switch>
                            {/*------------------------ PUBLIC ROUTES ------------------------*/}

                            <Route path="/items"         exact component = {Homepage}     />
                            <Route path="/login"         exact component = {LoginPage}/>   
                            <Route path="/signup"        exact component = {SignupPage}   />
                            <Route path="/"              exact component = {LandingPage}  />
                            <Route path="/items/:itemId" exact component = {ItemPage}     />
                            <Route path="/shoppingcart"  exact component = {ShoppingCartPage} />

                            {/*------------------------ PRIVATE ROUTES ------------------------*/}

                            <Route path="/users/:userId" component ={UserPage}/>   
                            <Route component={Notfoundpage} />

                        </Switch>
                    </BrowserRouter>
            </PersistGate>
        </Provider>
        )
    }
}

const node = document.getElementById("app")


ReactDOM.render(
    <App />,
    node
)

