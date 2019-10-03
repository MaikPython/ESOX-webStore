import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"


const ItemList = (props) => {
    const items = props.arrayOfItems.map(item =>{
        return(
            < Item arrayOfItems = {item} key={item.id} id={item.id}/>
        )
    })
    return(
        <div id="shop_items">            
            {items}
        </div>
    )

}

ItemList.propTypes = {
    arrayOfItems: PropTypes.array
}

const Item = (props) => {
    return(
    <Link to={`/items/${props.id}`}>
        <div className="item1">
            <img src={props.arrayOfItems.imgSrc} className="item"/>
            <h3>{props.arrayOfItems.title}</h3>
            <p>{props.arrayOfItems.price}</p>
        </div>
    </Link>
    )
}

Item.propTypes = {
    arrayOfItems: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}


export default ItemList