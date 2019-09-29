import React from "react"
import Header from "./components/Header.jsx"
import ImageSlides from "./components/ImageSlides.jsx"
import Footer from './components/Footer.jsx'

class Homepage extends React.Component{

    render(){
        return(
            <div>
            <Header />
            <ImageSlides />
            <Footer />
            </div>
        )
    }
}

export default Homepage