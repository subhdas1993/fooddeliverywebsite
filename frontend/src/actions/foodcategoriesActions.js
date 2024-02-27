import axios from "axios";

export const getAllFoodCategories = () => async (dispatch) => {
    dispatch({ type: 'GET_FOODCATEGORIES_REQUEST' })
    try {
        const response = await axios.get('/api/getfoodcategory', {header: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }})
        console.log(response)
        dispatch({ type: 'GET_FOODCATEGORIES_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_FOODCATEGORIES_FAILED', payload: error })
    }
}