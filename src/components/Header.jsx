import React from "react"
import { Link } from "react-router-dom";
import { profileIcon, cartIcon } from './../icons.js'
import { connect } from 'react-redux'
import './header.css'
import PropTypes from 'prop-types'
import authConsumer from './authConsumer.jsx'



const Header = ({user, cart}) => {
    console.log("header", cart)
    const logoPic = "/assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/items"}>
                <img src={logoPic} alt="logo" width="85" height="85"/>
            </Link>
            <h1>ESOX</h1>
           { !user.email && <LoginRegisterIcon cart={cart}/> }
           {  user.email && <UserWelcomeIcon user = {user} cart={cart}/>   }
            
        </div>
    )
}


Header.propTypes = {
    cart     : PropTypes.any,
    token    : PropTypes.string,
    user     : PropTypes.object,
    onLogout : PropTypes.func.isRequired

}

const LoginRegisterIcon = ({cart}) =>{
    return(
    <div className="header-items">
            <Link className="header-login" to={"/login"}>
                <img className="profile-icon"  src={profileIcon} width="45" height="45"/>
                <p className="login-text">Logi sisse</p>
            </Link>
            <Link to={"/shoppingcart"}>
                <img className="cart-icon" src={cartIcon} width="45" height="45"/>
                <Badge>{cart.length}</Badge>
            </Link>
        </div>
    )
}

const UserWelcomeIcon = ({user, cart}) => {
    const email = user.email
    const userName = email.split('@')[0]
    return(
        <div className="header-items">
             <Link to={`/users/${user._id}`} style={{textDecoration:"none"}}>
                <img className="profile-icon" src={profileIcon} width="50" height="50"/>
                <div style={{textAlign:"center", fontSize:"12px"}}>{userName}</div>
            </Link>
            <Link to={"/shoppingcart"}>
                <img className="cart-icon" src={cartIcon} width="45" height="45"/>
                <Badge>{cart.length}</Badge>
            </Link>
        </div>
    )
}


UserWelcomeIcon.propTypes = {
    token   : PropTypes.string,
    user    : PropTypes.object.isRequired,
    onLogout : PropTypes.func.isRequired,
    cart     : PropTypes.any,
}

LoginRegisterIcon.propTypes ={
    cart     : PropTypes.any,
}

const Badge = ({children}) => {
    if(children === 0){return null}
    return(
        <span>{children}</span>
    )
}

Badge.propTypes = {
    children: PropTypes.number.isRequired
}

const mapStateToProps = (store) =>{
    return{
        cart: store.cart
    }
}

export default connect(mapStateToProps)(authConsumer(Header))
