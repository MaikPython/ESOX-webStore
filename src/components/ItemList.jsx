import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import {MdAddShoppingCart} from 'react-icons/md'

const ItemList = (props) => {
    const items = props.arrayOfItems.map(item =>{
        return(
            < Item 
            arrayOfItems = {item} 
            key={item._id} 
            id={item._id}
            />
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
    <Link to={`/items/${props.id}`} className="shop-items-item-link">
        <div className="item1">
            <img src={props.arrayOfItems.imgSrc} className="item-image"/>
            <h3>{props.arrayOfItems.title}</h3>
            <h4>{props.arrayOfItems.price} eur</h4>
            <div className="add-item-shopping-cart">
                <MdAddShoppingCart style={{width:"25", height:"25"}}/>
            </div>
        </div>
    </Link>
    )
}

Item.propTypes = {
    arrayOfItems: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}


export default ItemList