import React from 'react'

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
    <div class="item1">
        <img src={props.handMade.imgSrc} class="item"/>
        <a href="#">{props.handMade.title}</a>
        <p>{props.handMade.price}</p>
    </div>
    )
}


export default ItemList