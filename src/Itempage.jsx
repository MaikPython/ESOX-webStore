import React from 'react'

import Header from './components/Header.jsx'
import {handMade} from './../data/Data.jsx'

class Itempage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const item = handMade.object[0]
        return(
            <div>
                <Header />
                <img src={item.imgSrc}/>
                <h3>{item.title}</h3>
                <h3>{item.price}</h3>
            </div>
        )
    }
}

export default Itempage