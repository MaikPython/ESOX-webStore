import React from "react"
import { Link } from "react-router-dom";
import { profileIcon, cartIcon } from './../icons.js'
import './header.css'

const Header = () => {
    const logoPic = "/assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/items"}>
                <img src={logoPic} alt="logo" width="100" height="100"/>
            </Link>
            <div className="header-items">
                <img className="profile-icon"src={profileIcon} width="50" height="50"/>
                <img className="cart-icon" src={cartIcon} width="50" height="50"/>
            </div>
        </div>
    )
}
export default Header