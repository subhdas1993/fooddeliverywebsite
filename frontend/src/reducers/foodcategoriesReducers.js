export const getAllFoodCategoryReducer=(state={foodcategories:[]}, action)=>{
    switch(action.type)
    {
        case 'GET_FOODCATEGORIES_REQUEST': return{
            loading2: true,
            ...state
        }
        case 'GET_FOODCATEGORIES_SUCCESS': return{
            loading2: false,
            foodcategories: action.payload
        }
        case 'GET_FOODCATEGORIES_FAILED': return{
            loading2: false,
            error2: action.payload 
        }
        default : return state
    }
}