import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"


const ItemList = (props) => {
    console.log(props)
    const items = props.handMade.map(item =>{
        return(
            < Item handMade = {item} key={item.id}/>
        )
    })
    return(
        <div id="shop_items">            
            {items}
        </div>
    )

}

ItemList.propTypes = {
    handMade: PropTypes.array
}

const Item = (props) => {
    return(
    <Link to={`/items/${props.id}`}>
        <div className="item1">
            <img src={props.handMade.imgSrc} className="item"/>
            <h3>{props.handMade.title}</h3>
            <p>{props.handMade.price}</p>
        </div>
    </Link>
    )
}

Item.propTypes = {
    
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}


export default ItemList