export const getAllFoodItemsReducer=(state={fooditems:[]}, action)=>{
    switch(action.type)
    {
        case 'GET_FOODITEMS_REQUEST': return{
            loading: true,
            ...state
        }
        case 'GET_FOODITEMS_SUCCESS': return{
            loading: false,
            fooditems: action.payload
        }
        case 'GET_FOODITEMS_FAILED': return{
            loading: false,
            error: action.payload 
        }
        default : return state
    }
}