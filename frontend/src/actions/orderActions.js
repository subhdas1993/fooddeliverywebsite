import axios from "axios"
export const placeOrder=(alltotal)=>async(dispatch, getState)=>{

    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducers.currentUser
    const cartitems = getState().cartReducers.cartItems

    const {name, email, address} = currentUser;
    try {
          const response = await axios.post('/api/placeorder',{alltotal, name, email, cartitems, address}, {header: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})
        console.log(response)
        dispatch({type:'PLACE_ORDER_SUCCESS'})
    } catch (error) {
        console.log(error)
        dispatch({type:'PLACE_ORDER_FAILED'})
    }
}

export const getUserOrders = () => async(dispatch,getState)=>{
    dispatch({type:'GET_USER_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducers.currentUser
    try {
        const response = await axios.post('/api/getuserorders', {email: currentUser.email}, {header: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})
      
        console.log(response)
        dispatch({type:'GET_USER_ORDER_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type:'GET_USER_ORDER_FAILED', payload : error})
    }
}