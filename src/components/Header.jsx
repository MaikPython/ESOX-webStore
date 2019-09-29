import React from "react"
import { Link } from "react-router-dom";


const Header = () => {
    const logoPic = "/assets/logo.jpg"
    return(
        <div className="menu">
            <Link to={"/items"}>
                <img src={logoPic} alt="logo" width="100" height="100"/>
            </Link>
            <div className="header-items">
                <button className="shopping-cart">Karu</button>
                <button className="login">Logi sisse/Loo kasutaja</button>
            </div>
        </div>
    )
}
export default Header