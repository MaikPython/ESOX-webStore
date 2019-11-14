export const addItem = (item) => ({
    type: 'ITEM_ADDED',
    payload: item
})

export const removeItem = (_id) => ({
    type: 'ITEM_REMOVED',
    payload: _id
})