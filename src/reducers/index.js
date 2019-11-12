import {combineReducers } from 'redux'

const selectedItem = (selectedItem = '', action) => {
    if(action.type === "ITEM_ADDED"){action.payload}
    return {...selectedItem, cart: selectedItem.concat([action.payload])}
}

export default combineReducers({
    shoppingCart: selectedItem
})

