import React from "react"
import {Link} from 'react-router-dom';
class ImageSlides extends React.Component{
    render(){
        return(
                <div className="slider">
                    <figure>
                        <img src="/assets/background1.jpg"/>
                        <img src="/assets/background2.jpg"/>
                        <img src="/assets/background1.jpg"/>
                    </figure>
                    <Link to="/items">
                        <button className="landing-btn">Mine poodi</button>
                    </Link>
                </div>
                        
        )
    }
}


export default ImageSlides