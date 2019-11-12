import React from "react"
import { Link } from "react-router-dom";
import { profileIcon, cartIcon } from './../icons.js'
import './header.css'
import PropTypes from 'prop-types'
import authConsumer from './authConsumer.jsx'

const Header = ({user, onLogout}) => {
    const logoPic = "/assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/items"}>
                <img src={logoPic} alt="logo" width="80" height="80"/>
            </Link>
            <h1>ESOX</h1>
           { !user.email && <LoginRegisterIcon /> }
           {  user.email && <UserWelcomeIcon user = {user} onLogout={onLogout}/>   }
            
        </div>
    )
}


Header.propTypes = {
    token    : PropTypes.string,
    user     :  PropTypes.object,
    onLogout : PropTypes.func.isRequired

}

const LoginRegisterIcon = () =>{
    return(
    <div className="header-items">
            <Link className="header-login" to={"/login"}>
                <img className="profile-icon"  src={profileIcon} width="45" height="45"/>
                <p className="login-text">Logi sisse</p>
            </Link>
            <Link to={"/shoppingcart"}>
                <img className="cart-icon" src={cartIcon} width="45" height="45"/>
            </Link>
        </div>
    )
}

const UserWelcomeIcon = ({user, onLogout}) => {

    return(
        <div className="header-items">
             <Link to={`/users/${user._id}`}>
                <img className="profile-icon" src={profileIcon} width="50" height="50"/>
                <div>{user.email}</div>
            </Link>
            <Link to={"/items"}>
                <button className="log-out" onClick={()=> onLogout()}>Logi välja</button>
            </Link>
        </div>
    )
}


UserWelcomeIcon.propTypes = {
    token   : PropTypes.string,
    user    : PropTypes.object.isRequired,
    onLogout : PropTypes.func.isRequired

}

export default authConsumer(Header)
