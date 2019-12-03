import * as services from './../../server/services'
import * as selectors from './../store/selectors'

export const userUpdate = (user) => ({
    type: 'USER_UPDATE',
    payload: user
})

export const tokenUpdate = (token) => ({
    type: 'TOKE_UPDATE',
    payload: token
})

export const addItem = (item) => ({
    type: 'ITEM_ADDED',
    payload: item
})

export const removeItem = (_id) => ({
    type: 'ITEM_REMOVED',
    payload: _id
})

export const getItems = () => (dispatch, getState) => {
    const store = getState()
    if(selectors.getItems(store).length > 0) return null
    dispatch(itemsRequest())
    return services.getItems()
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