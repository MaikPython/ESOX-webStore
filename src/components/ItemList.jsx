import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { MdAddShoppingCart } from 'react-icons/md'
import { connect } from 'react-redux'
import { addItem } from './../actions'
import { useDispatch } from 'react-redux'

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
    const dispatch = useDispatch()
    return(
    <div className="shop-items-item-link">
        <div className="item1">
            <Link to={`/items/${props.id}`} style={{textDecoration:"none", color: "black"}}>
                    <img src={props.arrayOfItems.imgSrc} className="item-image"/>
                    <h3>{props.arrayOfItems.title}</h3>
                    <h4>{props.arrayOfItems.price} eur</h4>    
            </Link>

        <div className="add-item-shopping-cart">
            <MdAddShoppingCart style={{width:"25", height:"25"}} onClick={() => dispatch(addItem(props.arrayOfItems)) } />
        </div>
        </div>

    </div>
    )
}

Item.propTypes = {
    arrayOfItems: PropTypes.array.isRequired,
    id          : PropTypes.string.isRequired,
    imgSrc      : PropTypes.string.isRequired,
    title       : PropTypes.string.isRequired,
    price       : PropTypes.number.isRequired,
    cart        : PropTypes.array.isRequired,
    dispatch    : PropTypes.func.isRequired
}

const mapStateToProps = (store) => {
    return{
        cart: store.cart
    }
}

export default connect(mapStateToProps)(ItemList)