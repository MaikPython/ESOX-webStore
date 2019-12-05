import * as services from './../../server/services'
import * as selectors from './../store/selectors'
import {toast} from 'react-toastify'

export const userUpdate = (user) => ({
    type: 'USER_UPDATE',
    payload: user
})

export const tokenUpdate = (token) => ({
    type: 'TOKEN_UPDATE',
    payload: token
})

export const addItem = (item) => (dispatch, getState) => {
  const store = getState()
  const itemId = item._id
  const token = selectors.getToken(store)
  const userId = selectors.getUser(store)._id
  console.log(token, itemId, 'aaa')
  services.addItemToCart({userId, itemId, token})
  .then(() => {
    toast.success('Toode lisatud edukalt!')
    dispatch({
      type: 'ITEM_ADDED',
      payload: itemId,  
    })
  })
  .catch(err => {
    console.log(err)
    toast.error('Toote lisamine ebaõnnestus!')
  })
}

export const removeItem = (itemId) => (dispatch, getState) => {
  const store = getState()
  const token = selectors.getToken(store)
  const userId = selectors.getUser(store)._id
  services.removeItemFromCart({userId, itemId, token})
  .then(() => {
    toast.success('Toode eemaldati edukalt!')
    dispatch({
      type: 'ITEM_REMOVED',
      payload: itemId,  
    })
  })
  .catch(err => {
    console.log(err)
    toast.error('Toote eemaldamine ebaõnnestus!')
  })
}

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

  export const refrehUser = () => (dispatch, getState) => {
    const store = getState()
    const userId = selectors.getUserId(store)
    const token = selectors.getToken(store)
    services.getUser({userId, token})
        .then(user => {
            dispatch(userUpdate(user))
        })
        .catch(error => {
            console.log(error, 'is the error')
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