import React from "react"
import { Link } from "react-router-dom";
import { profileIcon, cartIcon } from './../icons.js'
import { connect } from 'react-redux'
import './header.css'
import PropTypes from 'prop-types'
import { userPropTypes } from "../reducers/index.js";
import { userUpdate, tokenUpdate } from './../actions'
import { useDispatch } from 'react-redux'

const Header = ({user, cart}) => {
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(userUpdate(null))
        dispatch(tokenUpdate(null))
    }

    const logoPic = "/assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/items"}>
                <img src={logoPic} alt="logo" width="85" height="85"/>
            </Link>
            <h1>ESOX</h1>
           {  !user && <LoginRegisterIcon cart={cart}/> }
           {   user && <UserWelcomeIcon user = {user} cart={cart} handleLogOut={handleLogOut}/>   }
            
        </div>
    )
}


Header.propTypes = {
    cart     : PropTypes.any,
    token    : PropTypes.string,
    user     : PropTypes.shape(userPropTypes),
    handleLogOut : PropTypes.func.isRequired
}

const LoginRegisterIcon = ({cart}) =>{
    return(
    <div className="header-items">
            <Link className="header-login" to={"/login"} >
                <img className="profile-icon"  src={profileIcon} width="45" height="45"/>
                <p className="login-text">Logi sisse</p>
            </Link>
            <Link to={"/shoppingcart"} style={{padding:"10px", textDecoration:"none", color:"black"}}>
                <img className="cart-icon" src={cartIcon} width="45" height="45"/>
                <Badge style={{textDecoration:"none"}}>{cart.length}</Badge>
            </Link>
        </div>
    )
}

const UserWelcomeIcon = ({user, cart, handleLogOut}) => {
    const email = user.email
    const userName = email.split('@')[0]

    return(
        <div className="header-items" >
             <Link to={`/users/${user._id}`} style={{textDecoration:"none"}}>
                <img className="profile-icon" src={profileIcon} width="50" height="50"/>
                <div style={{textAlign:"center", fontSize:"12px"}}>{userName}</div>
            </Link>
            <Link to={"/shoppingcart"} style={{padding:"10px", textDecoration:"none", color:"black"}}>
                <img className="cart-icon" src={cartIcon} width="45" height="45"/>
                <Badge>{cart.length}</Badge>
            </Link>
            <p style={{cursor:"pointer", fontSize:"12px", display:"flex", alignItems:"center", marginRight: "15px"}} onClick={()=> handleLogOut()}>Logi välja</p>
        </div>
    )
}



UserWelcomeIcon.propTypes = {
    token           : PropTypes.string,
    user            : PropTypes.shape(userPropTypes),
    cart            : PropTypes.any,
    handleLogOut    : PropTypes.func,
    dispatch        : PropTypes.func
}

LoginRegisterIcon.propTypes ={
    cart     : PropTypes.any,
}

const Badge = ({children}) => {
    if(children === 0){return null}
    return(
        <span style={{marginRight:"10px"}}>{children}</span>
    )
}

Badge.propTypes = {
    children: PropTypes.number.isRequired
}

const mapStateToProps = (store) => {
    return{
        cart    : store.cart,
        user    : store.user,
        token   : store.token
    }
}

export default connect(mapStateToProps)(Header)
