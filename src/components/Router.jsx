import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from "./Header.jsx"

import Homepage from "./../pages/Homepage.jsx"
import ItemPage from "./../pages/Itempage.jsx"
import LandingPage from "./../pages/Landingpage.jsx"
import LoginPage from "./../pages/LoginPage.jsx"
import SignupPage from "./../pages/SignupPage.jsx"
import UserPage from "./../pages/UserPage.jsx"
import Notfoundpage from './../pages/Notfoundpage.jsx'
import ShoppingCartPage from './../pages/ShoppingCartPage.jsx'
import PropTypes from 'prop-types'
// import * as servicles from './../../server/services'
// import * as selectors from './../store/selectors'
import * as actions from './../actions'
import { connect } from 'react-redux'

class Router extends React.PureComponent {

    static propTypes = {
        dispatch: PropTypes.any.isRequired,
    }

    componentDidMount(){
        console.log('test') 
        this.props.dispatch(actions.refrehUser())
    }

    render() {
        return (
            <div>                  
            {/*------------------------ PUBLIC ROUTES ------------------------*/}
            <Route path={"/"} component={Header} />
                <Switch>
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
            </div>
        )
    }
}
  

export default connect()(Router)