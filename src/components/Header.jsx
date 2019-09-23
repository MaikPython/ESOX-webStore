const Header = () => {
    const logoPic = "./assets/logo.jpg"
    return(
        <div class="menu">
            <img src={logoPic} alt="logo" width="100" height="100"/>
            <div class="header-items">
                <button class="shopping-cart">Karu</button>
                <button class="login">Logi sisse/Loo kasutaja</button>
            </div>
        </div>
    )
}
export default Header