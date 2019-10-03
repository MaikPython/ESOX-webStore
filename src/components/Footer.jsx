import React from 'react'
class Footer extends React.Component{

    render(){
        return(
            <div className="footer">
                <div className="footer-content">

                    <div className="footer-section about">
                        <h1 className="logo-text">Esox</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum, molestiae cupiditate laudantium labore qui consectetur magni quo distinctio. Doloremque, cumque. Impedit exercitationem alias repudiandae tempore provident 
                        </p>
                        <div className="contact">
                            <span><i className="fas fa-phone"></i> &nbsp; 123456789 </span>
                            <br/>
                            <span><i className="fas fa-envelope"></i> &nbsp; info@esox.ee </span>
                        </div>
                        <div className="socials">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>  
                    </div>
                    
                    <div className="footer-section contact-form">
                        <h2>Kontakt</h2>
                        <br/>
                        <form action="index.html" method="post">
                            <input type="email" name="email" className="text-input" placeholder="Sinu emaili aadress..."/>
                            <br/>
                            <textarea name="message" className="text-input" placeholder="Sinu soov..."></textarea>
                            <br/>
                            <button type="submit" className="btn btn-big">Saada sõnum
                            <i className="fas fa-envelope"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Footer