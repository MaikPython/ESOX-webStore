import React from 'react'
import { Link } from "react-router-dom";



const ItemList = (props) => {
    const items = props.handMade.object.map(item =>{
        return(
            < Item handMade = {item}/>
        )
    })
    return(
        <div id="shop_items">            
            {items}
        </div>
    )

}

const Item = (props) => {
    return(
    <Link to={"/item"}>
        <div class="item1">
            <img src={props.handMade.imgSrc} class="item"/>
            <h3>{props.handMade.title}</h3>
            <p>{props.handMade.price}</p>
        </div>
    </Link>
    )
}


export default ItemList