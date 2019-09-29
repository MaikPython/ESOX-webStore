import React from "react"
import Header from "./components/Header.jsx"
import ImageSlides from "./components/ImageSlides.jsx"

class Homepage extends React.Component{

    render(){
        return(
            <div>
            <Header />
            <ImageSlides />
            </div>
        )
    }
}

export default Homepage