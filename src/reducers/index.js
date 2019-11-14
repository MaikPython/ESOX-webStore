import { createStore } from 'redux'

const initialState = {
    user: {
        email       : null,
        _id         : null,
        createdAt   : null,     
    },
    cart: []
}

const selectedItem = (state = initialState, action) => {
    switch (action.type) {
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

const store = createStore(selectedItem)
store.subscribe(() => console.log(store.getState()));

export default store

const removeItemById = (items, _id) => {
  const index = items.find(item => item._id === _id)
  if(!index){return items}
  const copy = items.slice()
  copy.splice(index, 1)
  return copy
}