import React from 'react'

const ItemList = (props) => {
    const items = props.handMade.object.map(item =>{
        return(
        <div class="item1">
            <img src={item.imgSrc} class="item"/>
            <a href="#">{item.title}</a>
            <p>{item.price}</p>
        </div>
        )
    })
    return(
        <div id="shop_items">            
            {items}
        </div>
    )

}


export default ItemList