import React from "react"
import ImageSlides from "./../components/ImageSlides.jsx"
import LadingPageLures from './../components/LandingPageLures.jsx'
import Footer from './../components/Footer.jsx'
import {Link} from 'react-router-dom'

class Homepage extends React.Component{

    render(){
        return(
            <div>
            <div className="page-wrapper">
                <ImageSlides />
                <div className="slide-info-text">
                <h3>Unikaalsed ja kvaliteetsed käsitöölandid</h3>
                    <Link className="slide-button" to="/items">
                        <div className="landing-btn">
                            <p className="go-shop">MINE POODI</p>
                        </div>
                    </Link>
                </div>
                <h1 style={{textAlign:"center", marginTop:"3%", textDecorationLine:"underLine", textUnderlinePosition:"under"}}>VIIMASED TOOTED</h1>
                <LadingPageLures />
            </div>
            <Footer />
            </div>
        )
    }
}

export default Homepage