import axios from "axios";

export const getAllFoodItems = () => async(dispatch)=>{
    dispatch({type:'GET_FOODITEMS_REQUEST'})
    try {
          const response = await axios.get('/api/getfooditems', {header: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})
        console.log(response)
        dispatch({type:'GET_FOODITEMS_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type:'GET_FOODITEMS_FAILED', payload : error})
    }
}