import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const initialState = {
  user: {
      email       : null,
      _id         : null,
      createdAt   : null,     
  },
  cart: [],
  items: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEMS_SUCCESS': {
      return{
        ...state,
        items: action.payload
      }
    }

    case 'ITEM_ADDED': {
      return {
        ...state,
        cart: state.cart.concat([action.payload])
      };
    }
    case 'ITEM_REMOVED':{
      return {
        ...state,
        cart: removeItemById(state.cart, action.payload)
      }
    }
    default:{
      return state;
    }
  }
};


export const getItems = () => (dispatch, getState) => {

  if(getState().items.length > 0) return null;

  dispatch(itemsRequest())
  return fetch("api/v1/items")
    .then(res => {
      return res.json()
    })
    .then(items => {
      dispatch(itemsSuccess(items))
    })
    .catch(err => {
      console.log(err) 
      dispatch(itemsFailure())
    })
}

export const itemsSuccess = (items) => ({
  type : 'ITEMS_SUCCESS',
  payload: items
})

export const itemsRequest = (items) => ({
  type : 'ITEMS_REQUEST',
  payload: items,
})

export const itemsFailure = (items) => ({
  type : 'ITEMS_FAILURE',
  payload: items
})

const store = createStore(reducer, applyMiddleware(thunk, logger))
store.subscribe(() => console.log(store.getState()));

export default store

const removeItemById = (items, _id) => {
const index = items.findIdex(item => item._id === _id)
if(index === -1){return items}
const copy = items.slice()
copy.splice(index, 1)
return copy
}