import PropTypes from 'prop-types'

const initialState = {
  token: null,
  user: null,
  cart: [],
  items: []
}

export const userPropTypes = {
  _id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(PropTypes.string).isRequired
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'USER_UPDATE':{
      return{
        ...state,
        user: action.payload
      }
    }
    
    case 'TOKEN_UPDATE':{
      return{
        ...state,
        token: action.payload
      }
    }

    case 'ITEMS_SUCCESS': {
      return{
        ...state,
        items: action.payload
      }
    }

    case 'ITEM_ADDED': {
      return {
        ...state,
        user: addItemToCart(state.user, action.payload)
      };
    }
    case 'ITEM_REMOVED':{
      return {
        ...state,
        user: removeItemFromCart(state.user, action.payload)
      }
    }
    default:{
      return state;
    }
  }
};

const addItemToCart = (user, ItemId) => {
  return {
    ...user,
    cart: user.cart.concat([ItemId]) 
  }
}

const removeItemFromCart = (user, itemId) => {
  const foundItemIndex = user.cart.findIndex(cartId => cartId === itemId)
  if(foundItemIndex === -1) return user 
  const cartCopy = user.cart.slice()
  cartCopy.splice(foundItemIndex, 1)
  return{
    ...user,
    cart: cartCopy
  }
}

// const removeItemById = (items, _id) => {
//   const index = items.findIndex(item => item._id === _id)
//   if(index === -1){return items}
//   const copy = items.slice()
//   copy.splice(index, 1)
//   return copy
// }