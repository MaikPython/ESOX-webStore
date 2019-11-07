import React from 'react'
import {Link} from 'react-router-dom'

const Notfoundpage = () =>{
    return(
        <div className="not-found-page">
            <h1>404 Sellist lehte ei ole :(</h1>
            <center><Link to="/items">Return to Home Page</Link></center>
        </div>
    )
}
export default Notfoundpage