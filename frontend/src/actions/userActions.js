import axios from "axios";

export const registerUserActions=(user)=>async(dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    try {
        const response = await axios.post('/api/createuser', user, {header: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})

        console.log(response)
        dispatch({type:'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAILED', payload: error})
    }
}

export const loginUserActions=(user)=>async(dispatch)=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    try {
        const response = await axios.post('/api/loginuser', user, {header: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})
        console.log(response)
        dispatch({type:'USER_LOGIN_SUCCESS', payload:response.data})
        localStorage.setItem('currentuser', JSON.stringify(response.data))
        window.location.href="/"
    } catch (error) {
        dispatch({type:'USER_LOGIN_FAILED', payload: error})
    }
}

export const logoutUserAction=()=>dispatch=>{
    localStorage.removeItem('currentuser')
    window.location.href="/"
}