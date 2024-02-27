export const addToCartAction = (fooditems, quantity, foodoptions, type) => (dispatch , getState) => {
    let cartItem = {
        name: fooditems.name,
        _id: fooditems._id,
        img: fooditems.img,
        type: type,
        quantity:quantity,
        selectOption: foodoptions[type],
        prices: fooditems.options,
        price: foodoptions[type] * quantity
    }
    dispatch({type:'ADD_TO_CART', payload : cartItem})
    const cartItems = getState().cartReducers.cartItems
    localStorage.setItem('cartitems', JSON.stringify(cartItems))
}

export const deleteFromCart = (fooditems) => (dispatch, getState) =>{
    dispatch({type:'DELETE_FROM_CART',payload:fooditems})
    const cartItems = getState().cartReducers.cartItems
    localStorage.setItem('cartitems', JSON.stringify(cartItems))
}