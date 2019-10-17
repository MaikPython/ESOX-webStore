import React from "react"
import ImageSlides from "./../components/ImageSlides.jsx"
import Footer from './../components/Footer.jsx'

class Homepage extends React.Component{

    render(){
        return(
            <div>
            <ImageSlides />
            <Footer />
            </div>
        )
    }
}

export default Homepage