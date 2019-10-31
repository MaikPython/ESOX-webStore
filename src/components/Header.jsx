import React from "react"
import { Link } from "react-router-dom";
import { profileIcon, cartIcon } from './../icons.js'
import './header.css'
import PropTypes from 'prop-types'


const Header = ({user, token, onLogout}) => {

   
    console.log(token, 'is the ')
    console.log(user, 'is the user')
    const logoPic = "/assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/items"}>
                <img src={logoPic} alt="logo" width="100" height="100"/>
            </Link>
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
            <Link to={"/login"}>
                <img className="profile-icon"src={profileIcon} width="50" height="50"/>
            </Link>
            <img className="cart-icon" src={cartIcon} width="50" height="50"/>
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

export default Header
