import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
    const logoPic = "./assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/"}>
                <img src={logoPic} alt="logo" width="100" height="100"/>
            </Link>
            <div class="header-items">
                <button class="shopping-cart">Karu</button>
                <button class="login">Logi sisse/Loo kasutaja</button>
            </div>
        </div>
    )
}
export default Header