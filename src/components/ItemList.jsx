import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import { addItem } from './../actions'
import { useDispatch } from 'react-redux'
import * as selectors from './../store/selectors'

const ItemList = (props) => {
    const items = props.arrayOfItems.map(item =>{
        return(
            < Item 
            item = {item}
            imgSrc = {item.imgSrc}
            price = {item.price}
            title = {item.title}
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
    items: PropTypes.any,
    arrayOfItems: PropTypes.any
}

const Item = (props) => {
    const dispatch = useDispatch()
    return(
    <div className="shop-items-item-link">
        <div className="item1">
            <Link to={`/items/${props.id}`} style={{textDecoration:"none", color: "black"}}>
                    <img src={props.imgSrc} className="item-image"/>
                    <h3>{props.title}</h3>
                    <h4>{props.price} eur</h4>    
            </Link>

        <div className="add-item-shopping-cart">
            <MdAddShoppingCart style={{width:"25", height:"25"}} onClick={() => dispatch(addItem(props.item)) } />
        </div>
        </div>

    </div>
    )
}

Item.propTypes = {
    item : PropTypes.any,
    arrayOfItems: PropTypes.array,
    id          : PropTypes.string.isRequired,
    imgSrc      : PropTypes.string.isRequired,
    title       : PropTypes.string.isRequired,
    price       : PropTypes.number.isRequired,
    cart        : PropTypes.array,
    dispatch    : PropTypes.func
}

const mapStateToProps = (store) => {
    return{
        cart: selectors.getCart(store)
    }
}

export default connect(mapStateToProps)(ItemList)