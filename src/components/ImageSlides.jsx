import React from "react"

class ImageSlides extends React.Component{
    render(){
        return(
            <div className="slider-frame">
                <div className="slide-image">
                    <div className="img-container">
                        <img src="/assets/background1.jpg" width="1247" height="600"/>
                    </div>
                    <div className="img-container">
                        <img src="/assets/background2.jpg"  width="1247" height="600"/>
                    </div>
                    <div className="img-container">
                        <img src="/assets/background3.jpg"  width="1247" height="600"/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default ImageSlides